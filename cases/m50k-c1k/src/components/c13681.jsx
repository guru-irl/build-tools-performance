import React from 'react';
const LABEL_13681 = 'component_13681';
export function Component13681({ value = 13681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13681, 'data-value': derived.doubled }, children);
}
export default Component13681;
