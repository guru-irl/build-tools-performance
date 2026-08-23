import React from 'react';
const LABEL_28036 = 'component_28036';
export function Component28036({ value = 28036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28036, 'data-value': derived.doubled }, children);
}
export default Component28036;
