import React from 'react';
const LABEL_32912 = 'component_32912';
export function Component32912({ value = 32912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32912, 'data-value': derived.doubled }, children);
}
export default Component32912;
