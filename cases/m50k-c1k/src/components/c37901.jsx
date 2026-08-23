import React from 'react';
const LABEL_37901 = 'component_37901';
export function Component37901({ value = 37901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37901, 'data-value': derived.doubled }, children);
}
export default Component37901;
