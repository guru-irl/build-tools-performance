import React from 'react';
const LABEL_28506 = 'component_28506';
export function Component28506({ value = 28506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28506, 'data-value': derived.doubled }, children);
}
export default Component28506;
