import React from 'react';
const LABEL_2591 = 'component_2591';
export function Component2591({ value = 2591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2591, 'data-value': derived.doubled }, children);
}
export default Component2591;
