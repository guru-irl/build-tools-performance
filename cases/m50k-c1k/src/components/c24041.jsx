import React from 'react';
const LABEL_24041 = 'component_24041';
export function Component24041({ value = 24041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24041, 'data-value': derived.doubled }, children);
}
export default Component24041;
