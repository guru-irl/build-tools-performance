import React from 'react';
const LABEL_25857 = 'component_25857';
export function Component25857({ value = 25857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25857, 'data-value': derived.doubled }, children);
}
export default Component25857;
