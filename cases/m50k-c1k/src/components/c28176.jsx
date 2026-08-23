import React from 'react';
const LABEL_28176 = 'component_28176';
export function Component28176({ value = 28176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28176, 'data-value': derived.doubled }, children);
}
export default Component28176;
