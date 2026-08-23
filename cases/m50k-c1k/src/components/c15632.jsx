import React from 'react';
const LABEL_15632 = 'component_15632';
export function Component15632({ value = 15632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15632, 'data-value': derived.doubled }, children);
}
export default Component15632;
