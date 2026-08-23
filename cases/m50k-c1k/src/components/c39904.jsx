import React from 'react';
const LABEL_39904 = 'component_39904';
export function Component39904({ value = 39904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39904, 'data-value': derived.doubled }, children);
}
export default Component39904;
