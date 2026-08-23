import React from 'react';
const LABEL_3177 = 'component_3177';
export function Component3177({ value = 3177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3177, 'data-value': derived.doubled }, children);
}
export default Component3177;
