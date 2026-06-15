import { useEffect } from 'react'

/**
 * Reveals any element with the `reveal` class once it scrolls into view by
 * adding `is-visible`. A MutationObserver watches for elements added later
 * (e.g. when the Projects filter swaps content) so they animate in too.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    const observe = (root: ParentNode) =>
      root.querySelectorAll?.('.reveal:not(.is-visible)').forEach((el) => io.observe(el))

    observe(document)

    // Catch elements added after mount (conditional/filtered content).
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) =>
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.classList.contains('reveal') && !node.classList.contains('is-visible')) {
              io.observe(node)
            }
            observe(node)
          }
        }),
      )
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
