import React from 'react';
const LABEL_24248 = 'component_24248';
export function Component24248({ value = 24248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24248, 'data-value': derived.doubled }, children);
}
export default Component24248;
