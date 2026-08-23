import React from 'react';
const LABEL_11865 = 'component_11865';
export function Component11865({ value = 11865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11865, 'data-value': derived.doubled }, children);
}
export default Component11865;
