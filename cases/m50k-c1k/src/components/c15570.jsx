import React from 'react';
const LABEL_15570 = 'component_15570';
export function Component15570({ value = 15570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15570, 'data-value': derived.doubled }, children);
}
export default Component15570;
