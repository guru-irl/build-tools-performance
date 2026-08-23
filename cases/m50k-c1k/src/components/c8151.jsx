import React from 'react';
const LABEL_8151 = 'component_8151';
export function Component8151({ value = 8151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8151, 'data-value': derived.doubled }, children);
}
export default Component8151;
