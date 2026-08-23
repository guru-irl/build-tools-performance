import React from 'react';
const LABEL_30041 = 'component_30041';
export function Component30041({ value = 30041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30041, 'data-value': derived.doubled }, children);
}
export default Component30041;
