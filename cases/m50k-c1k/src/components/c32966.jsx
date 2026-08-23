import React from 'react';
const LABEL_32966 = 'component_32966';
export function Component32966({ value = 32966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32966, 'data-value': derived.doubled }, children);
}
export default Component32966;
