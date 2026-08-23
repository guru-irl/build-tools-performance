import React from 'react';
const LABEL_18712 = 'component_18712';
export function Component18712({ value = 18712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18712, 'data-value': derived.doubled }, children);
}
export default Component18712;
