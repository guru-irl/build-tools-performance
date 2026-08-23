import React from 'react';
const LABEL_34972 = 'component_34972';
export function Component34972({ value = 34972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34972, 'data-value': derived.doubled }, children);
}
export default Component34972;
