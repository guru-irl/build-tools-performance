import React from 'react';
const LABEL_37614 = 'component_37614';
export function Component37614({ value = 37614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37614, 'data-value': derived.doubled }, children);
}
export default Component37614;
