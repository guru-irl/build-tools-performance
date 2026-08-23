import React from 'react';
const LABEL_24632 = 'component_24632';
export function Component24632({ value = 24632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24632, 'data-value': derived.doubled }, children);
}
export default Component24632;
