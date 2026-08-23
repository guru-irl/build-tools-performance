import React from 'react';
const LABEL_30243 = 'component_30243';
export function Component30243({ value = 30243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30243, 'data-value': derived.doubled }, children);
}
export default Component30243;
