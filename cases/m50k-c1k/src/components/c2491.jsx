import React from 'react';
const LABEL_2491 = 'component_2491';
export function Component2491({ value = 2491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2491, 'data-value': derived.doubled }, children);
}
export default Component2491;
