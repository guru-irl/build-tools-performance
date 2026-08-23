import React from 'react';
const LABEL_15856 = 'component_15856';
export function Component15856({ value = 15856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15856, 'data-value': derived.doubled }, children);
}
export default Component15856;
