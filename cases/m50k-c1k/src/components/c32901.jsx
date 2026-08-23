import React from 'react';
const LABEL_32901 = 'component_32901';
export function Component32901({ value = 32901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32901, 'data-value': derived.doubled }, children);
}
export default Component32901;
