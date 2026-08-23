import React from 'react';
const LABEL_36865 = 'component_36865';
export function Component36865({ value = 36865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36865, 'data-value': derived.doubled }, children);
}
export default Component36865;
