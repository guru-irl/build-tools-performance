import React from 'react';
const LABEL_22494 = 'component_22494';
export function Component22494({ value = 22494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22494, 'data-value': derived.doubled }, children);
}
export default Component22494;
