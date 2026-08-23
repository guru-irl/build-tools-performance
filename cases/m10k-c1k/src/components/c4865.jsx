import React from 'react';
const LABEL_4865 = 'component_4865';
export function Component4865({ value = 4865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4865, 'data-value': derived.doubled }, children);
}
export default Component4865;
