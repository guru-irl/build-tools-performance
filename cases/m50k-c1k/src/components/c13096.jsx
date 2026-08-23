import React from 'react';
const LABEL_13096 = 'component_13096';
export function Component13096({ value = 13096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13096, 'data-value': derived.doubled }, children);
}
export default Component13096;
