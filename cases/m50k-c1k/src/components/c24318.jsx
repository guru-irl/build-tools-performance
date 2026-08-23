import React from 'react';
const LABEL_24318 = 'component_24318';
export function Component24318({ value = 24318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24318, 'data-value': derived.doubled }, children);
}
export default Component24318;
