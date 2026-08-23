import React from 'react';
const LABEL_40691 = 'component_40691';
export function Component40691({ value = 40691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40691, 'data-value': derived.doubled }, children);
}
export default Component40691;
