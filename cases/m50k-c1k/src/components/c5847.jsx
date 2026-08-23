import React from 'react';
const LABEL_5847 = 'component_5847';
export function Component5847({ value = 5847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5847, 'data-value': derived.doubled }, children);
}
export default Component5847;
