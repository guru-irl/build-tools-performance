import React from 'react';
const LABEL_26681 = 'component_26681';
export function Component26681({ value = 26681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26681, 'data-value': derived.doubled }, children);
}
export default Component26681;
