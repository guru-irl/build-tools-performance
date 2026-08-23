import React from 'react';
const LABEL_15943 = 'component_15943';
export function Component15943({ value = 15943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15943, 'data-value': derived.doubled }, children);
}
export default Component15943;
