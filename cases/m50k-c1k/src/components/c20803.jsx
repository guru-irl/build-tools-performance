import React from 'react';
const LABEL_20803 = 'component_20803';
export function Component20803({ value = 20803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20803, 'data-value': derived.doubled }, children);
}
export default Component20803;
