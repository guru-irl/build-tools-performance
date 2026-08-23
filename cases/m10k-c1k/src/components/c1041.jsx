import React from 'react';
const LABEL_1041 = 'component_1041';
export function Component1041({ value = 1041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1041, 'data-value': derived.doubled }, children);
}
export default Component1041;
