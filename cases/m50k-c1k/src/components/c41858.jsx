import React from 'react';
const LABEL_41858 = 'component_41858';
export function Component41858({ value = 41858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41858, 'data-value': derived.doubled }, children);
}
export default Component41858;
