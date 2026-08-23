import React from 'react';
const LABEL_28094 = 'component_28094';
export function Component28094({ value = 28094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28094, 'data-value': derived.doubled }, children);
}
export default Component28094;
