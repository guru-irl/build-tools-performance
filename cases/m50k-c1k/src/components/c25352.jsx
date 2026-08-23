import React from 'react';
const LABEL_25352 = 'component_25352';
export function Component25352({ value = 25352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25352, 'data-value': derived.doubled }, children);
}
export default Component25352;
