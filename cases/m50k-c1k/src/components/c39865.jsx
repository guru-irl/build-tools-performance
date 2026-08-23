import React from 'react';
const LABEL_39865 = 'component_39865';
export function Component39865({ value = 39865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39865, 'data-value': derived.doubled }, children);
}
export default Component39865;
