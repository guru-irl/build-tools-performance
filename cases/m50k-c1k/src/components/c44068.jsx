import React from 'react';
const LABEL_44068 = 'component_44068';
export function Component44068({ value = 44068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44068, 'data-value': derived.doubled }, children);
}
export default Component44068;
