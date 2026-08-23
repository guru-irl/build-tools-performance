import React from 'react';
const LABEL_1632 = 'component_1632';
export function Component1632({ value = 1632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1632, 'data-value': derived.doubled }, children);
}
export default Component1632;
