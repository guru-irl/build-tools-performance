import React from 'react';
const LABEL_16517 = 'component_16517';
export function Component16517({ value = 16517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16517, 'data-value': derived.doubled }, children);
}
export default Component16517;
