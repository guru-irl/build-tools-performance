import React from 'react';
const LABEL_14712 = 'component_14712';
export function Component14712({ value = 14712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14712, 'data-value': derived.doubled }, children);
}
export default Component14712;
