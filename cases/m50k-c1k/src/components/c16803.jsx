import React from 'react';
const LABEL_16803 = 'component_16803';
export function Component16803({ value = 16803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16803, 'data-value': derived.doubled }, children);
}
export default Component16803;
