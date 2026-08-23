import React from 'react';
const LABEL_30326 = 'component_30326';
export function Component30326({ value = 30326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30326, 'data-value': derived.doubled }, children);
}
export default Component30326;
