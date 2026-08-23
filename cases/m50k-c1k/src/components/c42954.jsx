import React from 'react';
const LABEL_42954 = 'component_42954';
export function Component42954({ value = 42954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42954, 'data-value': derived.doubled }, children);
}
export default Component42954;
