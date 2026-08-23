import React from 'react';
const LABEL_7308 = 'component_7308';
export function Component7308({ value = 7308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7308, 'data-value': derived.doubled }, children);
}
export default Component7308;
