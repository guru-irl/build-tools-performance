import React from 'react';
const LABEL_42074 = 'component_42074';
export function Component42074({ value = 42074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42074, 'data-value': derived.doubled }, children);
}
export default Component42074;
