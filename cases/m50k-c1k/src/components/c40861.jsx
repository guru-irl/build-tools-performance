import React from 'react';
const LABEL_40861 = 'component_40861';
export function Component40861({ value = 40861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40861, 'data-value': derived.doubled }, children);
}
export default Component40861;
