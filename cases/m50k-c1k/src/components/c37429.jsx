import React from 'react';
const LABEL_37429 = 'component_37429';
export function Component37429({ value = 37429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37429, 'data-value': derived.doubled }, children);
}
export default Component37429;
