import React from 'react';
const LABEL_30910 = 'component_30910';
export function Component30910({ value = 30910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30910, 'data-value': derived.doubled }, children);
}
export default Component30910;
