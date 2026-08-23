import React from 'react';
const LABEL_35803 = 'component_35803';
export function Component35803({ value = 35803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35803, 'data-value': derived.doubled }, children);
}
export default Component35803;
