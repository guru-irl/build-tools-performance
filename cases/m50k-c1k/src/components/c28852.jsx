import React from 'react';
const LABEL_28852 = 'component_28852';
export function Component28852({ value = 28852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28852, 'data-value': derived.doubled }, children);
}
export default Component28852;
