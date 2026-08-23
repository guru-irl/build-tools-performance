import React from 'react';
const LABEL_5484 = 'component_5484';
export function Component5484({ value = 5484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5484, 'data-value': derived.doubled }, children);
}
export default Component5484;
