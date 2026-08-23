import React from 'react';
const LABEL_24429 = 'component_24429';
export function Component24429({ value = 24429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24429, 'data-value': derived.doubled }, children);
}
export default Component24429;
