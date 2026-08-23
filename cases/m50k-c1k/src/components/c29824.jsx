import React from 'react';
const LABEL_29824 = 'component_29824';
export function Component29824({ value = 29824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29824, 'data-value': derived.doubled }, children);
}
export default Component29824;
