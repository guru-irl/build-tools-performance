import React from 'react';
const LABEL_39084 = 'component_39084';
export function Component39084({ value = 39084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39084, 'data-value': derived.doubled }, children);
}
export default Component39084;
