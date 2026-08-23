import React from 'react';
const LABEL_15849 = 'component_15849';
export function Component15849({ value = 15849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15849, 'data-value': derived.doubled }, children);
}
export default Component15849;
