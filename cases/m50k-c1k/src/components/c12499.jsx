import React from 'react';
const LABEL_12499 = 'component_12499';
export function Component12499({ value = 12499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12499, 'data-value': derived.doubled }, children);
}
export default Component12499;
