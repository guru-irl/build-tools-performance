import React from 'react';
const LABEL_28065 = 'component_28065';
export function Component28065({ value = 28065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28065, 'data-value': derived.doubled }, children);
}
export default Component28065;
