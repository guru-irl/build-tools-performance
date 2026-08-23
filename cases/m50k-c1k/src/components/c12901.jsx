import React from 'react';
const LABEL_12901 = 'component_12901';
export function Component12901({ value = 12901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12901, 'data-value': derived.doubled }, children);
}
export default Component12901;
