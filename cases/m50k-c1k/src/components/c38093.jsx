import React from 'react';
const LABEL_38093 = 'component_38093';
export function Component38093({ value = 38093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38093, 'data-value': derived.doubled }, children);
}
export default Component38093;
