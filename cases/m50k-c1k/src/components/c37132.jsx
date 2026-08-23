import React from 'react';
const LABEL_37132 = 'component_37132';
export function Component37132({ value = 37132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37132, 'data-value': derived.doubled }, children);
}
export default Component37132;
