import React from 'react';
const LABEL_25900 = 'component_25900';
export function Component25900({ value = 25900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25900, 'data-value': derived.doubled }, children);
}
export default Component25900;
