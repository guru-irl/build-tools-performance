import React from 'react';
const LABEL_12852 = 'component_12852';
export function Component12852({ value = 12852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12852, 'data-value': derived.doubled }, children);
}
export default Component12852;
