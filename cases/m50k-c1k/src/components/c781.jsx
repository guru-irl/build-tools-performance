import React from 'react';
const LABEL_781 = 'component_781';
export function Component781({ value = 781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_781, 'data-value': derived.doubled }, children);
}
export default Component781;
