import React from 'react';
const LABEL_39162 = 'component_39162';
export function Component39162({ value = 39162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39162, 'data-value': derived.doubled }, children);
}
export default Component39162;
