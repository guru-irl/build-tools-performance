import React from 'react';
const LABEL_44761 = 'component_44761';
export function Component44761({ value = 44761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44761, 'data-value': derived.doubled }, children);
}
export default Component44761;
