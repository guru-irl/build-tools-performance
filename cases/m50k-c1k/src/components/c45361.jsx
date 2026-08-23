import React from 'react';
const LABEL_45361 = 'component_45361';
export function Component45361({ value = 45361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45361, 'data-value': derived.doubled }, children);
}
export default Component45361;
