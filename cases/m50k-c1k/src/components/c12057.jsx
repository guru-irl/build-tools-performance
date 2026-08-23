import React from 'react';
const LABEL_12057 = 'component_12057';
export function Component12057({ value = 12057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12057, 'data-value': derived.doubled }, children);
}
export default Component12057;
