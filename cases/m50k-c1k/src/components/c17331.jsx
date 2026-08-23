import React from 'react';
const LABEL_17331 = 'component_17331';
export function Component17331({ value = 17331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17331, 'data-value': derived.doubled }, children);
}
export default Component17331;
