import React from 'react';
const LABEL_3111 = 'component_3111';
export function Component3111({ value = 3111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3111, 'data-value': derived.doubled }, children);
}
export default Component3111;
