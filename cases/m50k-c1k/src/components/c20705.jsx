import React from 'react';
const LABEL_20705 = 'component_20705';
export function Component20705({ value = 20705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20705, 'data-value': derived.doubled }, children);
}
export default Component20705;
