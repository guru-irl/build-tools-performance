import React from 'react';
const LABEL_6484 = 'component_6484';
export function Component6484({ value = 6484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6484, 'data-value': derived.doubled }, children);
}
export default Component6484;
