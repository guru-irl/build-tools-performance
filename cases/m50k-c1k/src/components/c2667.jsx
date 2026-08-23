import React from 'react';
const LABEL_2667 = 'component_2667';
export function Component2667({ value = 2667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2667, 'data-value': derived.doubled }, children);
}
export default Component2667;
