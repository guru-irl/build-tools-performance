import React from 'react';
const LABEL_30804 = 'component_30804';
export function Component30804({ value = 30804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30804, 'data-value': derived.doubled }, children);
}
export default Component30804;
