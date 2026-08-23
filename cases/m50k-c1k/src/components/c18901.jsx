import React from 'react';
const LABEL_18901 = 'component_18901';
export function Component18901({ value = 18901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18901, 'data-value': derived.doubled }, children);
}
export default Component18901;
