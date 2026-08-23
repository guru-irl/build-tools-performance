import React from 'react';
const LABEL_30362 = 'component_30362';
export function Component30362({ value = 30362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30362, 'data-value': derived.doubled }, children);
}
export default Component30362;
