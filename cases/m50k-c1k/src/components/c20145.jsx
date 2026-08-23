import React from 'react';
const LABEL_20145 = 'component_20145';
export function Component20145({ value = 20145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20145, 'data-value': derived.doubled }, children);
}
export default Component20145;
