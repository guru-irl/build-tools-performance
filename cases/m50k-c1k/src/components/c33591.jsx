import React from 'react';
const LABEL_33591 = 'component_33591';
export function Component33591({ value = 33591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33591, 'data-value': derived.doubled }, children);
}
export default Component33591;
