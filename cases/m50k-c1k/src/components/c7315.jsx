import React from 'react';
const LABEL_7315 = 'component_7315';
export function Component7315({ value = 7315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7315, 'data-value': derived.doubled }, children);
}
export default Component7315;
