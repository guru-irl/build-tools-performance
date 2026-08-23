import React from 'react';
const LABEL_42873 = 'component_42873';
export function Component42873({ value = 42873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42873, 'data-value': derived.doubled }, children);
}
export default Component42873;
