import React from 'react';
const LABEL_32910 = 'component_32910';
export function Component32910({ value = 32910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32910, 'data-value': derived.doubled }, children);
}
export default Component32910;
