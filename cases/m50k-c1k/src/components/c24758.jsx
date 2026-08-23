import React from 'react';
const LABEL_24758 = 'component_24758';
export function Component24758({ value = 24758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24758, 'data-value': derived.doubled }, children);
}
export default Component24758;
