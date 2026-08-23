import React from 'react';
const LABEL_7561 = 'component_7561';
export function Component7561({ value = 7561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7561, 'data-value': derived.doubled }, children);
}
export default Component7561;
