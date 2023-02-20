import tippy from 'tippy.js';

export function productDayTippy() {
  tippy('.product-day__size-title-svg', {
    trigger: 'click',
    theme: 'light',
    content: 'Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений.',
  });
}
