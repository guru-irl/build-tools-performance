import React from 'react';
const LABEL_8248 = 'component_8248';
export function Component8248({ value = 8248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8248, 'data-value': derived.doubled }, children);
}
export default Component8248;
