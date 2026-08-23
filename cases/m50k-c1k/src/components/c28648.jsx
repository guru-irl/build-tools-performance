import React from 'react';
const LABEL_28648 = 'component_28648';
export function Component28648({ value = 28648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28648, 'data-value': derived.doubled }, children);
}
export default Component28648;
