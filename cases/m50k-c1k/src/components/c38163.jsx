import React from 'react';
const LABEL_38163 = 'component_38163';
export function Component38163({ value = 38163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38163, 'data-value': derived.doubled }, children);
}
export default Component38163;
