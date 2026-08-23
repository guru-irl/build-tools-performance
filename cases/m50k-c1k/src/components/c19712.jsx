import React from 'react';
const LABEL_19712 = 'component_19712';
export function Component19712({ value = 19712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19712, 'data-value': derived.doubled }, children);
}
export default Component19712;
