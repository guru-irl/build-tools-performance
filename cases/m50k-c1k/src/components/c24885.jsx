import React from 'react';
const LABEL_24885 = 'component_24885';
export function Component24885({ value = 24885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24885, 'data-value': derived.doubled }, children);
}
export default Component24885;
