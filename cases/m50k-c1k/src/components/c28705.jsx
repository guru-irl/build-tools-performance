import React from 'react';
const LABEL_28705 = 'component_28705';
export function Component28705({ value = 28705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28705, 'data-value': derived.doubled }, children);
}
export default Component28705;
