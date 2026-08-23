import React from 'react';
const LABEL_38712 = 'component_38712';
export function Component38712({ value = 38712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38712, 'data-value': derived.doubled }, children);
}
export default Component38712;
