import React from 'react';
const LABEL_26972 = 'component_26972';
export function Component26972({ value = 26972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26972, 'data-value': derived.doubled }, children);
}
export default Component26972;
