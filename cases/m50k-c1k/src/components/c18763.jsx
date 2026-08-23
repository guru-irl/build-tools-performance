import React from 'react';
const LABEL_18763 = 'component_18763';
export function Component18763({ value = 18763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18763, 'data-value': derived.doubled }, children);
}
export default Component18763;
