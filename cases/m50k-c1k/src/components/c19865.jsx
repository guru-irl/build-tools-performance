import React from 'react';
const LABEL_19865 = 'component_19865';
export function Component19865({ value = 19865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19865, 'data-value': derived.doubled }, children);
}
export default Component19865;
