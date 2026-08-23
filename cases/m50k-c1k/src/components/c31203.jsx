import React from 'react';
const LABEL_31203 = 'component_31203';
export function Component31203({ value = 31203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31203, 'data-value': derived.doubled }, children);
}
export default Component31203;
