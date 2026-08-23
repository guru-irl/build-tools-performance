import React from 'react';
const LABEL_23681 = 'component_23681';
export function Component23681({ value = 23681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23681, 'data-value': derived.doubled }, children);
}
export default Component23681;
