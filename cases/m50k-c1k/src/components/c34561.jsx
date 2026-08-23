import React from 'react';
const LABEL_34561 = 'component_34561';
export function Component34561({ value = 34561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34561, 'data-value': derived.doubled }, children);
}
export default Component34561;
