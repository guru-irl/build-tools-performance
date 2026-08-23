import React from 'react';
const LABEL_2376 = 'component_2376';
export function Component2376({ value = 2376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2376, 'data-value': derived.doubled }, children);
}
export default Component2376;
