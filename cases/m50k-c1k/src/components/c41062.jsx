import React from 'react';
const LABEL_41062 = 'component_41062';
export function Component41062({ value = 41062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41062, 'data-value': derived.doubled }, children);
}
export default Component41062;
