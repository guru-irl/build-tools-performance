import React from 'react';
const LABEL_13162 = 'component_13162';
export function Component13162({ value = 13162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13162, 'data-value': derived.doubled }, children);
}
export default Component13162;
