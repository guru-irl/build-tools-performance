import React from 'react';
const LABEL_14362 = 'component_14362';
export function Component14362({ value = 14362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14362, 'data-value': derived.doubled }, children);
}
export default Component14362;
