import React from 'react';
const LABEL_29653 = 'component_29653';
export function Component29653({ value = 29653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29653, 'data-value': derived.doubled }, children);
}
export default Component29653;
