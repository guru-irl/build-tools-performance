import React from 'react';
const LABEL_13531 = 'component_13531';
export function Component13531({ value = 13531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13531, 'data-value': derived.doubled }, children);
}
export default Component13531;
