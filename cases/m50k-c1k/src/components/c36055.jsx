import React from 'react';
const LABEL_36055 = 'component_36055';
export function Component36055({ value = 36055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36055, 'data-value': derived.doubled }, children);
}
export default Component36055;
