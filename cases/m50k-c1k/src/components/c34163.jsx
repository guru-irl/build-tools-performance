import React from 'react';
const LABEL_34163 = 'component_34163';
export function Component34163({ value = 34163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34163, 'data-value': derived.doubled }, children);
}
export default Component34163;
