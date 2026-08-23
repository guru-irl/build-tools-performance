import React from 'react';
const LABEL_44213 = 'component_44213';
export function Component44213({ value = 44213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44213, 'data-value': derived.doubled }, children);
}
export default Component44213;
