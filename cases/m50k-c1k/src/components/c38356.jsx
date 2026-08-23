import React from 'react';
const LABEL_38356 = 'component_38356';
export function Component38356({ value = 38356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38356, 'data-value': derived.doubled }, children);
}
export default Component38356;
