import React from 'react';
const LABEL_1071 = 'component_1071';
export function Component1071({ value = 1071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1071, 'data-value': derived.doubled }, children);
}
export default Component1071;
