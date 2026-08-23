import React from 'react';
const LABEL_26712 = 'component_26712';
export function Component26712({ value = 26712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26712, 'data-value': derived.doubled }, children);
}
export default Component26712;
