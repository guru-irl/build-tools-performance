import React from 'react';
const LABEL_44653 = 'component_44653';
export function Component44653({ value = 44653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44653, 'data-value': derived.doubled }, children);
}
export default Component44653;
