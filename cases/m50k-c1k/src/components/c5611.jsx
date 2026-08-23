import React from 'react';
const LABEL_5611 = 'component_5611';
export function Component5611({ value = 5611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5611, 'data-value': derived.doubled }, children);
}
export default Component5611;
