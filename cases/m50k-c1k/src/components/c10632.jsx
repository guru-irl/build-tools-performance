import React from 'react';
const LABEL_10632 = 'component_10632';
export function Component10632({ value = 10632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10632, 'data-value': derived.doubled }, children);
}
export default Component10632;
