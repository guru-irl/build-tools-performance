import React from 'react';
const LABEL_19163 = 'component_19163';
export function Component19163({ value = 19163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19163, 'data-value': derived.doubled }, children);
}
export default Component19163;
