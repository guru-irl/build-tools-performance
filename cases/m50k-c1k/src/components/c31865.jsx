import React from 'react';
const LABEL_31865 = 'component_31865';
export function Component31865({ value = 31865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31865, 'data-value': derived.doubled }, children);
}
export default Component31865;
