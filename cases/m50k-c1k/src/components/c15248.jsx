import React from 'react';
const LABEL_15248 = 'component_15248';
export function Component15248({ value = 15248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15248, 'data-value': derived.doubled }, children);
}
export default Component15248;
