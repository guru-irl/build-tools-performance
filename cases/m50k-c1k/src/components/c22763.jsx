import React from 'react';
const LABEL_22763 = 'component_22763';
export function Component22763({ value = 22763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22763, 'data-value': derived.doubled }, children);
}
export default Component22763;
