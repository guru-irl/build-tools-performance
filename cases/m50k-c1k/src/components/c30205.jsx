import React from 'react';
const LABEL_30205 = 'component_30205';
export function Component30205({ value = 30205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30205, 'data-value': derived.doubled }, children);
}
export default Component30205;
