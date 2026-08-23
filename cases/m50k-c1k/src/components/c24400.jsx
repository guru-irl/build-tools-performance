import React from 'react';
const LABEL_24400 = 'component_24400';
export function Component24400({ value = 24400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24400, 'data-value': derived.doubled }, children);
}
export default Component24400;
