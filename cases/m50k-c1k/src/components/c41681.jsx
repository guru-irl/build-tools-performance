import React from 'react';
const LABEL_41681 = 'component_41681';
export function Component41681({ value = 41681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41681, 'data-value': derived.doubled }, children);
}
export default Component41681;
