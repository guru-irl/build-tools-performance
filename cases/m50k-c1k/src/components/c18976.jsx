import React from 'react';
const LABEL_18976 = 'component_18976';
export function Component18976({ value = 18976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18976, 'data-value': derived.doubled }, children);
}
export default Component18976;
