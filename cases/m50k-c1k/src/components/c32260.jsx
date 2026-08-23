import React from 'react';
const LABEL_32260 = 'component_32260';
export function Component32260({ value = 32260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32260, 'data-value': derived.doubled }, children);
}
export default Component32260;
