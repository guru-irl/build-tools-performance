import React from 'react';
const LABEL_13130 = 'component_13130';
export function Component13130({ value = 13130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13130, 'data-value': derived.doubled }, children);
}
export default Component13130;
