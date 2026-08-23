import React from 'react';
const LABEL_3591 = 'component_3591';
export function Component3591({ value = 3591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3591, 'data-value': derived.doubled }, children);
}
export default Component3591;
