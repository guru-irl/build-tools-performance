import React from 'react';
const LABEL_15094 = 'component_15094';
export function Component15094({ value = 15094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15094, 'data-value': derived.doubled }, children);
}
export default Component15094;
