import React from 'react';
const LABEL_7803 = 'component_7803';
export function Component7803({ value = 7803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7803, 'data-value': derived.doubled }, children);
}
export default Component7803;
