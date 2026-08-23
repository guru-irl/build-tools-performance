import React from 'react';
const LABEL_28712 = 'component_28712';
export function Component28712({ value = 28712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28712, 'data-value': derived.doubled }, children);
}
export default Component28712;
