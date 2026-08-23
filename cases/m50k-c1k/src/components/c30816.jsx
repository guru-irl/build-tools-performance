import React from 'react';
const LABEL_30816 = 'component_30816';
export function Component30816({ value = 30816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30816, 'data-value': derived.doubled }, children);
}
export default Component30816;
