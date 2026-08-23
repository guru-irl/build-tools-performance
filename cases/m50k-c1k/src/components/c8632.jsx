import React from 'react';
const LABEL_8632 = 'component_8632';
export function Component8632({ value = 8632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8632, 'data-value': derived.doubled }, children);
}
export default Component8632;
