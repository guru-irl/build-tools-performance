import React from 'react';
const LABEL_40484 = 'component_40484';
export function Component40484({ value = 40484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40484, 'data-value': derived.doubled }, children);
}
export default Component40484;
