import React from 'react';
const LABEL_42391 = 'component_42391';
export function Component42391({ value = 42391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42391, 'data-value': derived.doubled }, children);
}
export default Component42391;
