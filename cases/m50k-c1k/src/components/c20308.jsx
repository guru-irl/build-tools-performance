import React from 'react';
const LABEL_20308 = 'component_20308';
export function Component20308({ value = 20308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20308, 'data-value': derived.doubled }, children);
}
export default Component20308;
