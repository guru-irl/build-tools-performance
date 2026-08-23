import React from 'react';
const LABEL_18972 = 'component_18972';
export function Component18972({ value = 18972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18972, 'data-value': derived.doubled }, children);
}
export default Component18972;
