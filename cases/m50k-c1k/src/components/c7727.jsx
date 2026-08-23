import React from 'react';
const LABEL_7727 = 'component_7727';
export function Component7727({ value = 7727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7727, 'data-value': derived.doubled }, children);
}
export default Component7727;
