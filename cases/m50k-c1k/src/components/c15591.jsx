import React from 'react';
const LABEL_15591 = 'component_15591';
export function Component15591({ value = 15591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15591, 'data-value': derived.doubled }, children);
}
export default Component15591;
