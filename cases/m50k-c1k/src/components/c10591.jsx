import React from 'react';
const LABEL_10591 = 'component_10591';
export function Component10591({ value = 10591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10591, 'data-value': derived.doubled }, children);
}
export default Component10591;
