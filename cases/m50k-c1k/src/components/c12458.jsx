import React from 'react';
const LABEL_12458 = 'component_12458';
export function Component12458({ value = 12458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12458, 'data-value': derived.doubled }, children);
}
export default Component12458;
