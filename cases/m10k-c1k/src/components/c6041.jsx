import React from 'react';
const LABEL_6041 = 'component_6041';
export function Component6041({ value = 6041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6041, 'data-value': derived.doubled }, children);
}
export default Component6041;
