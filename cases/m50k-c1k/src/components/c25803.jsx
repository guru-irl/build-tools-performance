import React from 'react';
const LABEL_25803 = 'component_25803';
export function Component25803({ value = 25803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25803, 'data-value': derived.doubled }, children);
}
export default Component25803;
