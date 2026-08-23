import React from 'react';
const LABEL_26960 = 'component_26960';
export function Component26960({ value = 26960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26960, 'data-value': derived.doubled }, children);
}
export default Component26960;
