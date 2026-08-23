import React from 'react';
const LABEL_11803 = 'component_11803';
export function Component11803({ value = 11803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11803, 'data-value': derived.doubled }, children);
}
export default Component11803;
