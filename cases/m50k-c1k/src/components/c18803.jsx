import React from 'react';
const LABEL_18803 = 'component_18803';
export function Component18803({ value = 18803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18803, 'data-value': derived.doubled }, children);
}
export default Component18803;
