import React from 'react';
const LABEL_7606 = 'component_7606';
export function Component7606({ value = 7606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7606, 'data-value': derived.doubled }, children);
}
export default Component7606;
