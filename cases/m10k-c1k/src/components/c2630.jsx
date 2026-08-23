import React from 'react';
const LABEL_2630 = 'component_2630';
export function Component2630({ value = 2630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2630, 'data-value': derived.doubled }, children);
}
export default Component2630;
