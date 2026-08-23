import React from 'react';
const LABEL_23591 = 'component_23591';
export function Component23591({ value = 23591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23591, 'data-value': derived.doubled }, children);
}
export default Component23591;
