import React from 'react';
const LABEL_16632 = 'component_16632';
export function Component16632({ value = 16632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16632, 'data-value': derived.doubled }, children);
}
export default Component16632;
