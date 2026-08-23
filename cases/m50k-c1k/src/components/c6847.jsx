import React from 'react';
const LABEL_6847 = 'component_6847';
export function Component6847({ value = 6847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6847, 'data-value': derived.doubled }, children);
}
export default Component6847;
