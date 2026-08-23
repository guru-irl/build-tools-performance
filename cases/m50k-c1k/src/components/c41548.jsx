import React from 'react';
const LABEL_41548 = 'component_41548';
export function Component41548({ value = 41548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41548, 'data-value': derived.doubled }, children);
}
export default Component41548;
