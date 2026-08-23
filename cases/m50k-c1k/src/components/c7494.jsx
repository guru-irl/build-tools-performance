import React from 'react';
const LABEL_7494 = 'component_7494';
export function Component7494({ value = 7494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7494, 'data-value': derived.doubled }, children);
}
export default Component7494;
