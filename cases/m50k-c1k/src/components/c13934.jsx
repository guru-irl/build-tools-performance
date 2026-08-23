import React from 'react';
const LABEL_13934 = 'component_13934';
export function Component13934({ value = 13934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13934, 'data-value': derived.doubled }, children);
}
export default Component13934;
