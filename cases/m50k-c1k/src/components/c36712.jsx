import React from 'react';
const LABEL_36712 = 'component_36712';
export function Component36712({ value = 36712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36712, 'data-value': derived.doubled }, children);
}
export default Component36712;
