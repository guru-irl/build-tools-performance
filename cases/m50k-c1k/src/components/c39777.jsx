import React from 'react';
const LABEL_39777 = 'component_39777';
export function Component39777({ value = 39777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39777, 'data-value': derived.doubled }, children);
}
export default Component39777;
