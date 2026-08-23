import React from 'react';
const LABEL_28116 = 'component_28116';
export function Component28116({ value = 28116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28116, 'data-value': derived.doubled }, children);
}
export default Component28116;
