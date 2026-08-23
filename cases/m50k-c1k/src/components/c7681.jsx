import React from 'react';
const LABEL_7681 = 'component_7681';
export function Component7681({ value = 7681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7681, 'data-value': derived.doubled }, children);
}
export default Component7681;
