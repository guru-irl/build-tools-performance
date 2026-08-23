import React from 'react';
const LABEL_25837 = 'component_25837';
export function Component25837({ value = 25837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25837, 'data-value': derived.doubled }, children);
}
export default Component25837;
