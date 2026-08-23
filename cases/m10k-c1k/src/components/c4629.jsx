import React from 'react';
const LABEL_4629 = 'component_4629';
export function Component4629({ value = 4629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4629, 'data-value': derived.doubled }, children);
}
export default Component4629;
