import React from 'react';
const LABEL_46803 = 'component_46803';
export function Component46803({ value = 46803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46803, 'data-value': derived.doubled }, children);
}
export default Component46803;
