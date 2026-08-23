import React from 'react';
const LABEL_17852 = 'component_17852';
export function Component17852({ value = 17852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17852, 'data-value': derived.doubled }, children);
}
export default Component17852;
