import React from 'react';
const LABEL_28006 = 'component_28006';
export function Component28006({ value = 28006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28006, 'data-value': derived.doubled }, children);
}
export default Component28006;
