import React from 'react';
const LABEL_12301 = 'component_12301';
export function Component12301({ value = 12301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12301, 'data-value': derived.doubled }, children);
}
export default Component12301;
