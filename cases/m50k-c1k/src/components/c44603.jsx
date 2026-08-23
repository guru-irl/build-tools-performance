import React from 'react';
const LABEL_44603 = 'component_44603';
export function Component44603({ value = 44603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44603, 'data-value': derived.doubled }, children);
}
export default Component44603;
