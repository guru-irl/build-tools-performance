import React from 'react';
const LABEL_42546 = 'component_42546';
export function Component42546({ value = 42546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42546, 'data-value': derived.doubled }, children);
}
export default Component42546;
