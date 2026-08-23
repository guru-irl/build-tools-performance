import React from 'react';
const LABEL_23632 = 'component_23632';
export function Component23632({ value = 23632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23632, 'data-value': derived.doubled }, children);
}
export default Component23632;
