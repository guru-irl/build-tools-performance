import React from 'react';
const LABEL_43041 = 'component_43041';
export function Component43041({ value = 43041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43041, 'data-value': derived.doubled }, children);
}
export default Component43041;
