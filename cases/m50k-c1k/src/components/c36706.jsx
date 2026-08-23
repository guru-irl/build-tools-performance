import React from 'react';
const LABEL_36706 = 'component_36706';
export function Component36706({ value = 36706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36706, 'data-value': derived.doubled }, children);
}
export default Component36706;
