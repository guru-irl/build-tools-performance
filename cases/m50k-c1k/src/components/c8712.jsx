import React from 'react';
const LABEL_8712 = 'component_8712';
export function Component8712({ value = 8712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8712, 'data-value': derived.doubled }, children);
}
export default Component8712;
