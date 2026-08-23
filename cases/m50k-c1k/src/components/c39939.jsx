import React from 'react';
const LABEL_39939 = 'component_39939';
export function Component39939({ value = 39939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39939, 'data-value': derived.doubled }, children);
}
export default Component39939;
