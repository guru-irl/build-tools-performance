import React from 'react';
const LABEL_30511 = 'component_30511';
export function Component30511({ value = 30511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30511, 'data-value': derived.doubled }, children);
}
export default Component30511;
