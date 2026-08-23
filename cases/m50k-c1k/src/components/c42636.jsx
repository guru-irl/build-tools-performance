import React from 'react';
const LABEL_42636 = 'component_42636';
export function Component42636({ value = 42636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42636, 'data-value': derived.doubled }, children);
}
export default Component42636;
