import React from 'react';
const LABEL_9712 = 'component_9712';
export function Component9712({ value = 9712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9712, 'data-value': derived.doubled }, children);
}
export default Component9712;
