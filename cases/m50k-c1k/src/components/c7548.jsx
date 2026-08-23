import React from 'react';
const LABEL_7548 = 'component_7548';
export function Component7548({ value = 7548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7548, 'data-value': derived.doubled }, children);
}
export default Component7548;
