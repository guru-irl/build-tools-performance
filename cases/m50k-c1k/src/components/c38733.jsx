import React from 'react';
const LABEL_38733 = 'component_38733';
export function Component38733({ value = 38733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38733, 'data-value': derived.doubled }, children);
}
export default Component38733;
