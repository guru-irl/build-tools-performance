import React from 'react';
const LABEL_12818 = 'component_12818';
export function Component12818({ value = 12818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12818, 'data-value': derived.doubled }, children);
}
export default Component12818;
