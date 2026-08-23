import React from 'react';
const LABEL_2041 = 'component_2041';
export function Component2041({ value = 2041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2041, 'data-value': derived.doubled }, children);
}
export default Component2041;
