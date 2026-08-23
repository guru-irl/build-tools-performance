import React from 'react';
const LABEL_21102 = 'component_21102';
export function Component21102({ value = 21102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21102, 'data-value': derived.doubled }, children);
}
export default Component21102;
