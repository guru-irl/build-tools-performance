import React from 'react';
const LABEL_31720 = 'component_31720';
export function Component31720({ value = 31720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31720, 'data-value': derived.doubled }, children);
}
export default Component31720;
