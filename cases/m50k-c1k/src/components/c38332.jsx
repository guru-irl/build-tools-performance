import React from 'react';
const LABEL_38332 = 'component_38332';
export function Component38332({ value = 38332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38332, 'data-value': derived.doubled }, children);
}
export default Component38332;
