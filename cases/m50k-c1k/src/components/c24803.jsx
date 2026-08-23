import React from 'react';
const LABEL_24803 = 'component_24803';
export function Component24803({ value = 24803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24803, 'data-value': derived.doubled }, children);
}
export default Component24803;
