import React from 'react';
const LABEL_24454 = 'component_24454';
export function Component24454({ value = 24454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24454, 'data-value': derived.doubled }, children);
}
export default Component24454;
