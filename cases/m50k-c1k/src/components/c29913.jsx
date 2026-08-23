import React from 'react';
const LABEL_29913 = 'component_29913';
export function Component29913({ value = 29913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29913, 'data-value': derived.doubled }, children);
}
export default Component29913;
