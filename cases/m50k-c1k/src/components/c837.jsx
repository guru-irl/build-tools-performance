import React from 'react';
const LABEL_837 = 'component_837';
export function Component837({ value = 837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_837, 'data-value': derived.doubled }, children);
}
export default Component837;
