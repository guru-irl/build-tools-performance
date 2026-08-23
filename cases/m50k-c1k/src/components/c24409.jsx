import React from 'react';
const LABEL_24409 = 'component_24409';
export function Component24409({ value = 24409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24409, 'data-value': derived.doubled }, children);
}
export default Component24409;
