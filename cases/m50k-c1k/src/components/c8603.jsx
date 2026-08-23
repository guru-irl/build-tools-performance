import React from 'react';
const LABEL_8603 = 'component_8603';
export function Component8603({ value = 8603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8603, 'data-value': derived.doubled }, children);
}
export default Component8603;
