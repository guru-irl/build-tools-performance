import React from 'react';
const LABEL_6681 = 'component_6681';
export function Component6681({ value = 6681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6681, 'data-value': derived.doubled }, children);
}
export default Component6681;
