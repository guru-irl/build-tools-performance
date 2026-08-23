import React from 'react';
const LABEL_23561 = 'component_23561';
export function Component23561({ value = 23561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23561, 'data-value': derived.doubled }, children);
}
export default Component23561;
