import React from 'react';
const LABEL_7712 = 'component_7712';
export function Component7712({ value = 7712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7712, 'data-value': derived.doubled }, children);
}
export default Component7712;
