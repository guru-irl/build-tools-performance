import React from 'react';
const LABEL_36694 = 'component_36694';
export function Component36694({ value = 36694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36694, 'data-value': derived.doubled }, children);
}
export default Component36694;
