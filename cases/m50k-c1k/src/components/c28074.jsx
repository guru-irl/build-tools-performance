import React from 'react';
const LABEL_28074 = 'component_28074';
export function Component28074({ value = 28074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28074, 'data-value': derived.doubled }, children);
}
export default Component28074;
