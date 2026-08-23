import React from 'react';
const LABEL_26329 = 'component_26329';
export function Component26329({ value = 26329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26329, 'data-value': derived.doubled }, children);
}
export default Component26329;
