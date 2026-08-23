import React from 'react';
const LABEL_40591 = 'component_40591';
export function Component40591({ value = 40591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40591, 'data-value': derived.doubled }, children);
}
export default Component40591;
