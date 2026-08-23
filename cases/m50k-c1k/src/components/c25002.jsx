import React from 'react';
const LABEL_25002 = 'component_25002';
export function Component25002({ value = 25002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25002, 'data-value': derived.doubled }, children);
}
export default Component25002;
