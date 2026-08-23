import React from 'react';
const LABEL_41494 = 'component_41494';
export function Component41494({ value = 41494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41494, 'data-value': derived.doubled }, children);
}
export default Component41494;
