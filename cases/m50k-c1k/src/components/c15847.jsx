import React from 'react';
const LABEL_15847 = 'component_15847';
export function Component15847({ value = 15847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15847, 'data-value': derived.doubled }, children);
}
export default Component15847;
