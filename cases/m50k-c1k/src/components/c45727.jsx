import React from 'react';
const LABEL_45727 = 'component_45727';
export function Component45727({ value = 45727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45727, 'data-value': derived.doubled }, children);
}
export default Component45727;
