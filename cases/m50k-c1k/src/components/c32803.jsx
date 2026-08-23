import React from 'react';
const LABEL_32803 = 'component_32803';
export function Component32803({ value = 32803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32803, 'data-value': derived.doubled }, children);
}
export default Component32803;
