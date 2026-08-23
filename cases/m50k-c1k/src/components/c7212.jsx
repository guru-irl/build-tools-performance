import React from 'react';
const LABEL_7212 = 'component_7212';
export function Component7212({ value = 7212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7212, 'data-value': derived.doubled }, children);
}
export default Component7212;
