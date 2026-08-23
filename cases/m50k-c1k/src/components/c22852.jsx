import React from 'react';
const LABEL_22852 = 'component_22852';
export function Component22852({ value = 22852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22852, 'data-value': derived.doubled }, children);
}
export default Component22852;
