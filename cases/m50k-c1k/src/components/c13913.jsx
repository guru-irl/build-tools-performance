import React from 'react';
const LABEL_13913 = 'component_13913';
export function Component13913({ value = 13913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13913, 'data-value': derived.doubled }, children);
}
export default Component13913;
