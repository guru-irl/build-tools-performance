import React from 'react';
const LABEL_8034 = 'component_8034';
export function Component8034({ value = 8034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8034, 'data-value': derived.doubled }, children);
}
export default Component8034;
