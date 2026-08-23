import React from 'react';
const LABEL_28943 = 'component_28943';
export function Component28943({ value = 28943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28943, 'data-value': derived.doubled }, children);
}
export default Component28943;
