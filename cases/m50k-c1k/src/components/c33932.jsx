import React from 'react';
const LABEL_33932 = 'component_33932';
export function Component33932({ value = 33932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33932, 'data-value': derived.doubled }, children);
}
export default Component33932;
