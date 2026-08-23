import React from 'react';
const LABEL_20772 = 'component_20772';
export function Component20772({ value = 20772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20772, 'data-value': derived.doubled }, children);
}
export default Component20772;
