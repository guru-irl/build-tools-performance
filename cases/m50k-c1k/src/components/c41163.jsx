import React from 'react';
const LABEL_41163 = 'component_41163';
export function Component41163({ value = 41163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41163, 'data-value': derived.doubled }, children);
}
export default Component41163;
