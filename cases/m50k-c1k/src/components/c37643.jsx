import React from 'react';
const LABEL_37643 = 'component_37643';
export function Component37643({ value = 37643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37643, 'data-value': derived.doubled }, children);
}
export default Component37643;
