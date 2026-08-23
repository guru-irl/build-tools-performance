import React from 'react';
const LABEL_37548 = 'component_37548';
export function Component37548({ value = 37548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37548, 'data-value': derived.doubled }, children);
}
export default Component37548;
