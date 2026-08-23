import React from 'react';
const LABEL_41111 = 'component_41111';
export function Component41111({ value = 41111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41111, 'data-value': derived.doubled }, children);
}
export default Component41111;
