import React from 'react';
const LABEL_1435 = 'component_1435';
export function Component1435({ value = 1435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1435, 'data-value': derived.doubled }, children);
}
export default Component1435;
