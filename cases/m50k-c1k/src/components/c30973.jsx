import React from 'react';
const LABEL_30973 = 'component_30973';
export function Component30973({ value = 30973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30973, 'data-value': derived.doubled }, children);
}
export default Component30973;
