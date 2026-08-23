import React from 'react';
const LABEL_30831 = 'component_30831';
export function Component30831({ value = 30831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30831, 'data-value': derived.doubled }, children);
}
export default Component30831;
