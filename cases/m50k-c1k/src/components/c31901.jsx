import React from 'react';
const LABEL_31901 = 'component_31901';
export function Component31901({ value = 31901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31901, 'data-value': derived.doubled }, children);
}
export default Component31901;
