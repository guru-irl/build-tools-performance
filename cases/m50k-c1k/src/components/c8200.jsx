import React from 'react';
const LABEL_8200 = 'component_8200';
export function Component8200({ value = 8200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8200, 'data-value': derived.doubled }, children);
}
export default Component8200;
