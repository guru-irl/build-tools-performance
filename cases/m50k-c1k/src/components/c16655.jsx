import React from 'react';
const LABEL_16655 = 'component_16655';
export function Component16655({ value = 16655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16655, 'data-value': derived.doubled }, children);
}
export default Component16655;
