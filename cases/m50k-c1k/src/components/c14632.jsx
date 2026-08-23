import React from 'react';
const LABEL_14632 = 'component_14632';
export function Component14632({ value = 14632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14632, 'data-value': derived.doubled }, children);
}
export default Component14632;
