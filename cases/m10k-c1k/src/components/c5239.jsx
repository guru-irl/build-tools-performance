import React from 'react';
const LABEL_5239 = 'component_5239';
export function Component5239({ value = 5239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5239, 'data-value': derived.doubled }, children);
}
export default Component5239;
