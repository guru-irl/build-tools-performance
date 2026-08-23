import React from 'react';
const LABEL_28177 = 'component_28177';
export function Component28177({ value = 28177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28177, 'data-value': derived.doubled }, children);
}
export default Component28177;
