import React from 'react';
const LABEL_21591 = 'component_21591';
export function Component21591({ value = 21591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21591, 'data-value': derived.doubled }, children);
}
export default Component21591;
