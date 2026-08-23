import React from 'react';
const LABEL_16041 = 'component_16041';
export function Component16041({ value = 16041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16041, 'data-value': derived.doubled }, children);
}
export default Component16041;
