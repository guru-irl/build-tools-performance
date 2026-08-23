import React from 'react';
const LABEL_37125 = 'component_37125';
export function Component37125({ value = 37125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37125, 'data-value': derived.doubled }, children);
}
export default Component37125;
