import React from 'react';
const LABEL_21954 = 'component_21954';
export function Component21954({ value = 21954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21954, 'data-value': derived.doubled }, children);
}
export default Component21954;
