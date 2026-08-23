import React from 'react';
const LABEL_25455 = 'component_25455';
export function Component25455({ value = 25455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25455, 'data-value': derived.doubled }, children);
}
export default Component25455;
