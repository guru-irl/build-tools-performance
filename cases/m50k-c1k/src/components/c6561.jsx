import React from 'react';
const LABEL_6561 = 'component_6561';
export function Component6561({ value = 6561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6561, 'data-value': derived.doubled }, children);
}
export default Component6561;
