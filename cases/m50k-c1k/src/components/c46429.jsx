import React from 'react';
const LABEL_46429 = 'component_46429';
export function Component46429({ value = 46429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46429, 'data-value': derived.doubled }, children);
}
export default Component46429;
