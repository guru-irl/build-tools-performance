import React from 'react';
const LABEL_28104 = 'component_28104';
export function Component28104({ value = 28104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28104, 'data-value': derived.doubled }, children);
}
export default Component28104;
