import React from 'react';
const LABEL_18840 = 'component_18840';
export function Component18840({ value = 18840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18840, 'data-value': derived.doubled }, children);
}
export default Component18840;
