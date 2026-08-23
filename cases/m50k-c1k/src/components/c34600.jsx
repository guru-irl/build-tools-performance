import React from 'react';
const LABEL_34600 = 'component_34600';
export function Component34600({ value = 34600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34600, 'data-value': derived.doubled }, children);
}
export default Component34600;
