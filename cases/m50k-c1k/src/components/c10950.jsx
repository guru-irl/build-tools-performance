import React from 'react';
const LABEL_10950 = 'component_10950';
export function Component10950({ value = 10950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10950, 'data-value': derived.doubled }, children);
}
export default Component10950;
