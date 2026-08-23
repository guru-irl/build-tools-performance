import React from 'react';
const LABEL_28391 = 'component_28391';
export function Component28391({ value = 28391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28391, 'data-value': derived.doubled }, children);
}
export default Component28391;
