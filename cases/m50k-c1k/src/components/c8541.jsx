import React from 'react';
const LABEL_8541 = 'component_8541';
export function Component8541({ value = 8541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8541, 'data-value': derived.doubled }, children);
}
export default Component8541;
