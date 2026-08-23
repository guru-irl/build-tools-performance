import React from 'react';
const LABEL_41133 = 'component_41133';
export function Component41133({ value = 41133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41133, 'data-value': derived.doubled }, children);
}
export default Component41133;
