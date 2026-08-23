import React from 'react';
const LABEL_41437 = 'component_41437';
export function Component41437({ value = 41437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41437, 'data-value': derived.doubled }, children);
}
export default Component41437;
