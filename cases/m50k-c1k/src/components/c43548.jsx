import React from 'react';
const LABEL_43548 = 'component_43548';
export function Component43548({ value = 43548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43548, 'data-value': derived.doubled }, children);
}
export default Component43548;
