import React from 'react';
const LABEL_35104 = 'component_35104';
export function Component35104({ value = 35104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35104, 'data-value': derived.doubled }, children);
}
export default Component35104;
