import React from 'react';
const LABEL_7646 = 'component_7646';
export function Component7646({ value = 7646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7646, 'data-value': derived.doubled }, children);
}
export default Component7646;
