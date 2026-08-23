import React from 'react';
const LABEL_34732 = 'component_34732';
export function Component34732({ value = 34732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34732, 'data-value': derived.doubled }, children);
}
export default Component34732;
