import React from 'react';
const LABEL_7614 = 'component_7614';
export function Component7614({ value = 7614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7614, 'data-value': derived.doubled }, children);
}
export default Component7614;
