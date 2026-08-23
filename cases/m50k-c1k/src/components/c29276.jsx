import React from 'react';
const LABEL_29276 = 'component_29276';
export function Component29276({ value = 29276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29276, 'data-value': derived.doubled }, children);
}
export default Component29276;
