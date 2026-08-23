import React from 'react';
const LABEL_31705 = 'component_31705';
export function Component31705({ value = 31705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31705, 'data-value': derived.doubled }, children);
}
export default Component31705;
