import React from 'react';
const LABEL_22865 = 'component_22865';
export function Component22865({ value = 22865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22865, 'data-value': derived.doubled }, children);
}
export default Component22865;
