import React from 'react';
const LABEL_2220 = 'component_2220';
export function Component2220({ value = 2220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2220, 'data-value': derived.doubled }, children);
}
export default Component2220;
