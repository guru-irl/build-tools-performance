import React from 'react';
const LABEL_25341 = 'component_25341';
export function Component25341({ value = 25341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25341, 'data-value': derived.doubled }, children);
}
export default Component25341;
