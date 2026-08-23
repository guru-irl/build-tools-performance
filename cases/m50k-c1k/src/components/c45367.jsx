import React from 'react';
const LABEL_45367 = 'component_45367';
export function Component45367({ value = 45367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45367, 'data-value': derived.doubled }, children);
}
export default Component45367;
