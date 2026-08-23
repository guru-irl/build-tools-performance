import React from 'react';
const LABEL_38167 = 'component_38167';
export function Component38167({ value = 38167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38167, 'data-value': derived.doubled }, children);
}
export default Component38167;
