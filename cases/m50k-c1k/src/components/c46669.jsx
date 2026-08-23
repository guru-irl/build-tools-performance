import React from 'react';
const LABEL_46669 = 'component_46669';
export function Component46669({ value = 46669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46669, 'data-value': derived.doubled }, children);
}
export default Component46669;
