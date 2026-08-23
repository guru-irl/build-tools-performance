import React from 'react';
const LABEL_24733 = 'component_24733';
export function Component24733({ value = 24733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24733, 'data-value': derived.doubled }, children);
}
export default Component24733;
