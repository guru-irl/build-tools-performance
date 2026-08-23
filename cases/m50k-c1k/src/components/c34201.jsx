import React from 'react';
const LABEL_34201 = 'component_34201';
export function Component34201({ value = 34201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34201, 'data-value': derived.doubled }, children);
}
export default Component34201;
