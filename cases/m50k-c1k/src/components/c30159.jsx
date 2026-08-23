import React from 'react';
const LABEL_30159 = 'component_30159';
export function Component30159({ value = 30159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30159, 'data-value': derived.doubled }, children);
}
export default Component30159;
