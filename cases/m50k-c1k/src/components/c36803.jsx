import React from 'react';
const LABEL_36803 = 'component_36803';
export function Component36803({ value = 36803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36803, 'data-value': derived.doubled }, children);
}
export default Component36803;
