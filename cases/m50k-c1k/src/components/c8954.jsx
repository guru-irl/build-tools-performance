import React from 'react';
const LABEL_8954 = 'component_8954';
export function Component8954({ value = 8954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8954, 'data-value': derived.doubled }, children);
}
export default Component8954;
