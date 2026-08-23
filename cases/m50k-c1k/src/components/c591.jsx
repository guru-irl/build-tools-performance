import React from 'react';
const LABEL_591 = 'component_591';
export function Component591({ value = 591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_591, 'data-value': derived.doubled }, children);
}
export default Component591;
