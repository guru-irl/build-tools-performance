import React from 'react';
const LABEL_35548 = 'component_35548';
export function Component35548({ value = 35548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35548, 'data-value': derived.doubled }, children);
}
export default Component35548;
