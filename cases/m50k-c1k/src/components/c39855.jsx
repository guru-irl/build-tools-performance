import React from 'react';
const LABEL_39855 = 'component_39855';
export function Component39855({ value = 39855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39855, 'data-value': derived.doubled }, children);
}
export default Component39855;
