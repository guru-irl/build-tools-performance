import React from 'react';
const LABEL_35712 = 'component_35712';
export function Component35712({ value = 35712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35712, 'data-value': derived.doubled }, children);
}
export default Component35712;
