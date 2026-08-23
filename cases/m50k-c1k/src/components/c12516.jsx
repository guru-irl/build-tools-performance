import React from 'react';
const LABEL_12516 = 'component_12516';
export function Component12516({ value = 12516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12516, 'data-value': derived.doubled }, children);
}
export default Component12516;
