import React from 'react';
const LABEL_33548 = 'component_33548';
export function Component33548({ value = 33548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33548, 'data-value': derived.doubled }, children);
}
export default Component33548;
