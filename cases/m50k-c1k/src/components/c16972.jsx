import React from 'react';
const LABEL_16972 = 'component_16972';
export function Component16972({ value = 16972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16972, 'data-value': derived.doubled }, children);
}
export default Component16972;
