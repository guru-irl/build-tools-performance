import React from 'react';
const LABEL_40712 = 'component_40712';
export function Component40712({ value = 40712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40712, 'data-value': derived.doubled }, children);
}
export default Component40712;
