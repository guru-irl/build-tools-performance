import React from 'react';
const LABEL_3803 = 'component_3803';
export function Component3803({ value = 3803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3803, 'data-value': derived.doubled }, children);
}
export default Component3803;
