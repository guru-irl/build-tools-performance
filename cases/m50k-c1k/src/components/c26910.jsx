import React from 'react';
const LABEL_26910 = 'component_26910';
export function Component26910({ value = 26910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26910, 'data-value': derived.doubled }, children);
}
export default Component26910;
