import React from 'react';
const LABEL_21285 = 'component_21285';
export function Component21285({ value = 21285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21285, 'data-value': derived.doubled }, children);
}
export default Component21285;
