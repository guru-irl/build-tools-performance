import React from 'react';
const LABEL_20712 = 'component_20712';
export function Component20712({ value = 20712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20712, 'data-value': derived.doubled }, children);
}
export default Component20712;
