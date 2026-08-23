import React from 'react';
const LABEL_41809 = 'component_41809';
export function Component41809({ value = 41809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41809, 'data-value': derived.doubled }, children);
}
export default Component41809;
