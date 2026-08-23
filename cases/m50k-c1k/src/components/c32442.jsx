import React from 'react';
const LABEL_32442 = 'component_32442';
export function Component32442({ value = 32442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32442, 'data-value': derived.doubled }, children);
}
export default Component32442;
