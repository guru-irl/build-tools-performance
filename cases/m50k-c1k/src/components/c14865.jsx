import React from 'react';
const LABEL_14865 = 'component_14865';
export function Component14865({ value = 14865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14865, 'data-value': derived.doubled }, children);
}
export default Component14865;
