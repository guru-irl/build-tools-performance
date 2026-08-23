import React from 'react';
const LABEL_28973 = 'component_28973';
export function Component28973({ value = 28973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28973, 'data-value': derived.doubled }, children);
}
export default Component28973;
