import React from 'react';
const LABEL_18497 = 'component_18497';
export function Component18497({ value = 18497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18497, 'data-value': derived.doubled }, children);
}
export default Component18497;
