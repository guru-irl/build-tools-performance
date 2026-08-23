import React from 'react';
const LABEL_13242 = 'component_13242';
export function Component13242({ value = 13242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13242, 'data-value': derived.doubled }, children);
}
export default Component13242;
