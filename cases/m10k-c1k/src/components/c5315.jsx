import React from 'react';
const LABEL_5315 = 'component_5315';
export function Component5315({ value = 5315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5315, 'data-value': derived.doubled }, children);
}
export default Component5315;
