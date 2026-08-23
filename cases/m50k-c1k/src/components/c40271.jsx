import React from 'react';
const LABEL_40271 = 'component_40271';
export function Component40271({ value = 40271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40271, 'data-value': derived.doubled }, children);
}
export default Component40271;
