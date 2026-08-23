import React from 'react';
const LABEL_8803 = 'component_8803';
export function Component8803({ value = 8803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8803, 'data-value': derived.doubled }, children);
}
export default Component8803;
