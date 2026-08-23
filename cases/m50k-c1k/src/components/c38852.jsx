import React from 'react';
const LABEL_38852 = 'component_38852';
export function Component38852({ value = 38852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38852, 'data-value': derived.doubled }, children);
}
export default Component38852;
