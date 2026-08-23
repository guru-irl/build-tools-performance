import React from 'react';
const LABEL_7125 = 'component_7125';
export function Component7125({ value = 7125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7125, 'data-value': derived.doubled }, children);
}
export default Component7125;
