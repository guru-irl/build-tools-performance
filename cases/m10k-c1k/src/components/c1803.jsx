import React from 'react';
const LABEL_1803 = 'component_1803';
export function Component1803({ value = 1803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1803, 'data-value': derived.doubled }, children);
}
export default Component1803;
