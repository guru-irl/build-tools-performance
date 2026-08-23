import React from 'react';
const LABEL_44612 = 'component_44612';
export function Component44612({ value = 44612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44612, 'data-value': derived.doubled }, children);
}
export default Component44612;
