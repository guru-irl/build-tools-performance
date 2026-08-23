import React from 'react';
const LABEL_21143 = 'component_21143';
export function Component21143({ value = 21143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21143, 'data-value': derived.doubled }, children);
}
export default Component21143;
