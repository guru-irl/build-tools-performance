import React from 'react';
const LABEL_43667 = 'component_43667';
export function Component43667({ value = 43667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43667, 'data-value': derived.doubled }, children);
}
export default Component43667;
