import React from 'react';
const LABEL_20103 = 'component_20103';
export function Component20103({ value = 20103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20103, 'data-value': derived.doubled }, children);
}
export default Component20103;
