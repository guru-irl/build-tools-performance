import React from 'react';
const LABEL_36189 = 'component_36189';
export function Component36189({ value = 36189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36189, 'data-value': derived.doubled }, children);
}
export default Component36189;
