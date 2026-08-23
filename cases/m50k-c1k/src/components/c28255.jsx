import React from 'react';
const LABEL_28255 = 'component_28255';
export function Component28255({ value = 28255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28255, 'data-value': derived.doubled }, children);
}
export default Component28255;
