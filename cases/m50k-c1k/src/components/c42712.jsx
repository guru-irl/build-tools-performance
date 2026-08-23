import React from 'react';
const LABEL_42712 = 'component_42712';
export function Component42712({ value = 42712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42712, 'data-value': derived.doubled }, children);
}
export default Component42712;
