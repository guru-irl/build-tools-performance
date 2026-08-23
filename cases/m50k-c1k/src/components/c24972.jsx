import React from 'react';
const LABEL_24972 = 'component_24972';
export function Component24972({ value = 24972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24972, 'data-value': derived.doubled }, children);
}
export default Component24972;
