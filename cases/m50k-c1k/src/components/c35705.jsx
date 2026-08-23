import React from 'react';
const LABEL_35705 = 'component_35705';
export function Component35705({ value = 35705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35705, 'data-value': derived.doubled }, children);
}
export default Component35705;
