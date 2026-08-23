import React from 'react';
const LABEL_22712 = 'component_22712';
export function Component22712({ value = 22712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22712, 'data-value': derived.doubled }, children);
}
export default Component22712;
