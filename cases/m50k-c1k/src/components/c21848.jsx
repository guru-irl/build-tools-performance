import React from 'react';
const LABEL_21848 = 'component_21848';
export function Component21848({ value = 21848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21848, 'data-value': derived.doubled }, children);
}
export default Component21848;
