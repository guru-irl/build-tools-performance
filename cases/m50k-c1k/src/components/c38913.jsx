import React from 'react';
const LABEL_38913 = 'component_38913';
export function Component38913({ value = 38913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38913, 'data-value': derived.doubled }, children);
}
export default Component38913;
