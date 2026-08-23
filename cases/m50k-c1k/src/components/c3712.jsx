import React from 'react';
const LABEL_3712 = 'component_3712';
export function Component3712({ value = 3712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3712, 'data-value': derived.doubled }, children);
}
export default Component3712;
