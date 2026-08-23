import React from 'react';
const LABEL_12132 = 'component_12132';
export function Component12132({ value = 12132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12132, 'data-value': derived.doubled }, children);
}
export default Component12132;
