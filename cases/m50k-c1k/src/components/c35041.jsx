import React from 'react';
const LABEL_35041 = 'component_35041';
export function Component35041({ value = 35041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35041, 'data-value': derived.doubled }, children);
}
export default Component35041;
