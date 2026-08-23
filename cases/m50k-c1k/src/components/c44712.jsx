import React from 'react';
const LABEL_44712 = 'component_44712';
export function Component44712({ value = 44712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44712, 'data-value': derived.doubled }, children);
}
export default Component44712;
