import React from 'react';
const LABEL_15192 = 'component_15192';
export function Component15192({ value = 15192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15192, 'data-value': derived.doubled }, children);
}
export default Component15192;
