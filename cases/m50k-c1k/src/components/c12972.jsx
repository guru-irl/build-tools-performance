import React from 'react';
const LABEL_12972 = 'component_12972';
export function Component12972({ value = 12972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12972, 'data-value': derived.doubled }, children);
}
export default Component12972;
