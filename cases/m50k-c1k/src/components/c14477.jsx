import React from 'react';
const LABEL_14477 = 'component_14477';
export function Component14477({ value = 14477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14477, 'data-value': derived.doubled }, children);
}
export default Component14477;
