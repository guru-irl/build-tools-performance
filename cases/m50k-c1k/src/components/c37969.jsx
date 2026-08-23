import React from 'react';
const LABEL_37969 = 'component_37969';
export function Component37969({ value = 37969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37969, 'data-value': derived.doubled }, children);
}
export default Component37969;
