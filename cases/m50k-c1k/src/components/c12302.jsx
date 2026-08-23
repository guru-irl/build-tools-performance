import React from 'react';
const LABEL_12302 = 'component_12302';
export function Component12302({ value = 12302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12302, 'data-value': derived.doubled }, children);
}
export default Component12302;
