import React from 'react';
const LABEL_26901 = 'component_26901';
export function Component26901({ value = 26901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26901, 'data-value': derived.doubled }, children);
}
export default Component26901;
