import React from 'react';
const LABEL_41453 = 'component_41453';
export function Component41453({ value = 41453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41453, 'data-value': derived.doubled }, children);
}
export default Component41453;
