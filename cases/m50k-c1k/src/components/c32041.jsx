import React from 'react';
const LABEL_32041 = 'component_32041';
export function Component32041({ value = 32041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32041, 'data-value': derived.doubled }, children);
}
export default Component32041;
