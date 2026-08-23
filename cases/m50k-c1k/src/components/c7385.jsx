import React from 'react';
const LABEL_7385 = 'component_7385';
export function Component7385({ value = 7385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7385, 'data-value': derived.doubled }, children);
}
export default Component7385;
