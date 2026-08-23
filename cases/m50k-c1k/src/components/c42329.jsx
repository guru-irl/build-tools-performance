import React from 'react';
const LABEL_42329 = 'component_42329';
export function Component42329({ value = 42329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42329, 'data-value': derived.doubled }, children);
}
export default Component42329;
