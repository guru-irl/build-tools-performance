import React from 'react';
const LABEL_13803 = 'component_13803';
export function Component13803({ value = 13803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13803, 'data-value': derived.doubled }, children);
}
export default Component13803;
