import React from 'react';
const LABEL_37469 = 'component_37469';
export function Component37469({ value = 37469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37469, 'data-value': derived.doubled }, children);
}
export default Component37469;
