import React from 'react';
const LABEL_16464 = 'component_16464';
export function Component16464({ value = 16464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16464, 'data-value': derived.doubled }, children);
}
export default Component16464;
