import React from 'react';
const LABEL_39237 = 'component_39237';
export function Component39237({ value = 39237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39237, 'data-value': derived.doubled }, children);
}
export default Component39237;
