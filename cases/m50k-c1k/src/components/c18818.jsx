import React from 'react';
const LABEL_18818 = 'component_18818';
export function Component18818({ value = 18818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18818, 'data-value': derived.doubled }, children);
}
export default Component18818;
