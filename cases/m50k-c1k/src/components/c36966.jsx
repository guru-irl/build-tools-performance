import React from 'react';
const LABEL_36966 = 'component_36966';
export function Component36966({ value = 36966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36966, 'data-value': derived.doubled }, children);
}
export default Component36966;
