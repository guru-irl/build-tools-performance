import React from 'react';
const LABEL_17550 = 'component_17550';
export function Component17550({ value = 17550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17550, 'data-value': derived.doubled }, children);
}
export default Component17550;
