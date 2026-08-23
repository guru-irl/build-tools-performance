import React from 'react';
const LABEL_28548 = 'component_28548';
export function Component28548({ value = 28548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28548, 'data-value': derived.doubled }, children);
}
export default Component28548;
