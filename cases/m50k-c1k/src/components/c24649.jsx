import React from 'react';
const LABEL_24649 = 'component_24649';
export function Component24649({ value = 24649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24649, 'data-value': derived.doubled }, children);
}
export default Component24649;
