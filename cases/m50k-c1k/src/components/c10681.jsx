import React from 'react';
const LABEL_10681 = 'component_10681';
export function Component10681({ value = 10681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10681, 'data-value': derived.doubled }, children);
}
export default Component10681;
