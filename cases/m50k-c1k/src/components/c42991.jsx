import React from 'react';
const LABEL_42991 = 'component_42991';
export function Component42991({ value = 42991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42991, 'data-value': derived.doubled }, children);
}
export default Component42991;
