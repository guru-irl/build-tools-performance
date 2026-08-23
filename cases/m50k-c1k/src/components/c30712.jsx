import React from 'react';
const LABEL_30712 = 'component_30712';
export function Component30712({ value = 30712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30712, 'data-value': derived.doubled }, children);
}
export default Component30712;
