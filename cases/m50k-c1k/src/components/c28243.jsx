import React from 'react';
const LABEL_28243 = 'component_28243';
export function Component28243({ value = 28243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28243, 'data-value': derived.doubled }, children);
}
export default Component28243;
