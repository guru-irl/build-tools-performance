import React from 'react';
const LABEL_852 = 'component_852';
export function Component852({ value = 852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_852, 'data-value': derived.doubled }, children);
}
export default Component852;
