import React from 'react';
const LABEL_41761 = 'component_41761';
export function Component41761({ value = 41761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41761, 'data-value': derived.doubled }, children);
}
export default Component41761;
