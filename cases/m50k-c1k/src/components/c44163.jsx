import React from 'react';
const LABEL_44163 = 'component_44163';
export function Component44163({ value = 44163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44163, 'data-value': derived.doubled }, children);
}
export default Component44163;
