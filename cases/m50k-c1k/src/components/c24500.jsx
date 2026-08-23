import React from 'react';
const LABEL_24500 = 'component_24500';
export function Component24500({ value = 24500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24500, 'data-value': derived.doubled }, children);
}
export default Component24500;
