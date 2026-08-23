import React from 'react';
const LABEL_23733 = 'component_23733';
export function Component23733({ value = 23733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23733, 'data-value': derived.doubled }, children);
}
export default Component23733;
