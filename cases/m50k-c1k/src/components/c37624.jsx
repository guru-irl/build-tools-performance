import React from 'react';
const LABEL_37624 = 'component_37624';
export function Component37624({ value = 37624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37624, 'data-value': derived.doubled }, children);
}
export default Component37624;
