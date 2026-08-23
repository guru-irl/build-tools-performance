import React from 'react';
const LABEL_18391 = 'component_18391';
export function Component18391({ value = 18391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18391, 'data-value': derived.doubled }, children);
}
export default Component18391;
