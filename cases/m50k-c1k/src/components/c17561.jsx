import React from 'react';
const LABEL_17561 = 'component_17561';
export function Component17561({ value = 17561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17561, 'data-value': derived.doubled }, children);
}
export default Component17561;
