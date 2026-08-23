import React from 'react';
const LABEL_2464 = 'component_2464';
export function Component2464({ value = 2464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2464, 'data-value': derived.doubled }, children);
}
export default Component2464;
