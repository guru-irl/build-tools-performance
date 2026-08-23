import React from 'react';
const LABEL_39464 = 'component_39464';
export function Component39464({ value = 39464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39464, 'data-value': derived.doubled }, children);
}
export default Component39464;
