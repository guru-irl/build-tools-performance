import React from 'react';
const LABEL_25201 = 'component_25201';
export function Component25201({ value = 25201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25201, 'data-value': derived.doubled }, children);
}
export default Component25201;
