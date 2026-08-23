import React from 'react';
const LABEL_35591 = 'component_35591';
export function Component35591({ value = 35591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35591, 'data-value': derived.doubled }, children);
}
export default Component35591;
