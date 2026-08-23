import React from 'react';
const LABEL_17094 = 'component_17094';
export function Component17094({ value = 17094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17094, 'data-value': derived.doubled }, children);
}
export default Component17094;
