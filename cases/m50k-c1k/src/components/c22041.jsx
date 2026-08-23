import React from 'react';
const LABEL_22041 = 'component_22041';
export function Component22041({ value = 22041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22041, 'data-value': derived.doubled }, children);
}
export default Component22041;
