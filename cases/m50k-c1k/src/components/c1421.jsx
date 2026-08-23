import React from 'react';
const LABEL_1421 = 'component_1421';
export function Component1421({ value = 1421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1421, 'data-value': derived.doubled }, children);
}
export default Component1421;
