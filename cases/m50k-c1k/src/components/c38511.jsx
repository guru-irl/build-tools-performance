import React from 'react';
const LABEL_38511 = 'component_38511';
export function Component38511({ value = 38511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38511, 'data-value': derived.doubled }, children);
}
export default Component38511;
