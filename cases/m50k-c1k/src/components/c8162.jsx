import React from 'react';
const LABEL_8162 = 'component_8162';
export function Component8162({ value = 8162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8162, 'data-value': derived.doubled }, children);
}
export default Component8162;
