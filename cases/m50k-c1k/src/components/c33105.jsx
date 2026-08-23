import React from 'react';
const LABEL_33105 = 'component_33105';
export function Component33105({ value = 33105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33105, 'data-value': derived.doubled }, children);
}
export default Component33105;
