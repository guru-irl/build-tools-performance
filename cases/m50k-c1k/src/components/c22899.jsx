import React from 'react';
const LABEL_22899 = 'component_22899';
export function Component22899({ value = 22899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22899, 'data-value': derived.doubled }, children);
}
export default Component22899;
