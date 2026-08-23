import React from 'react';
const LABEL_24278 = 'component_24278';
export function Component24278({ value = 24278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24278, 'data-value': derived.doubled }, children);
}
export default Component24278;
