import React from 'react';
const LABEL_21305 = 'component_21305';
export function Component21305({ value = 21305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21305, 'data-value': derived.doubled }, children);
}
export default Component21305;
