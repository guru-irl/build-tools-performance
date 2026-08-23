import React from 'react';
const LABEL_17632 = 'component_17632';
export function Component17632({ value = 17632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17632, 'data-value': derived.doubled }, children);
}
export default Component17632;
