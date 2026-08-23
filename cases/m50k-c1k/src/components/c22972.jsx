import React from 'react';
const LABEL_22972 = 'component_22972';
export function Component22972({ value = 22972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22972, 'data-value': derived.doubled }, children);
}
export default Component22972;
