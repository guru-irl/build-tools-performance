import React from 'react';
const LABEL_44853 = 'component_44853';
export function Component44853({ value = 44853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44853, 'data-value': derived.doubled }, children);
}
export default Component44853;
