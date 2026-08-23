import React from 'react';
const LABEL_8548 = 'component_8548';
export function Component8548({ value = 8548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8548, 'data-value': derived.doubled }, children);
}
export default Component8548;
