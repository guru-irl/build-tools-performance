import React from 'react';
const LABEL_26429 = 'component_26429';
export function Component26429({ value = 26429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26429, 'data-value': derived.doubled }, children);
}
export default Component26429;
