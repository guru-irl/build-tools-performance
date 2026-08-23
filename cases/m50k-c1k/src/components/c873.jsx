import React from 'react';
const LABEL_873 = 'component_873';
export function Component873({ value = 873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_873, 'data-value': derived.doubled }, children);
}
export default Component873;
