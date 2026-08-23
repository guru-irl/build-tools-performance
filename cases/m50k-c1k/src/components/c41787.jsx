import React from 'react';
const LABEL_41787 = 'component_41787';
export function Component41787({ value = 41787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41787, 'data-value': derived.doubled }, children);
}
export default Component41787;
