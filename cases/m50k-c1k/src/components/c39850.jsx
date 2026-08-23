import React from 'react';
const LABEL_39850 = 'component_39850';
export function Component39850({ value = 39850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39850, 'data-value': derived.doubled }, children);
}
export default Component39850;
