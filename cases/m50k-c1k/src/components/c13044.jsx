import React from 'react';
const LABEL_13044 = 'component_13044';
export function Component13044({ value = 13044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13044, 'data-value': derived.doubled }, children);
}
export default Component13044;
