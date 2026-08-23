import React from 'react';
const LABEL_24969 = 'component_24969';
export function Component24969({ value = 24969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24969, 'data-value': derived.doubled }, children);
}
export default Component24969;
