import React from 'react';
const LABEL_15041 = 'component_15041';
export function Component15041({ value = 15041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15041, 'data-value': derived.doubled }, children);
}
export default Component15041;
