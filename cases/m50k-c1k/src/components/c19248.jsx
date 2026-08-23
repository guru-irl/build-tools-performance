import React from 'react';
const LABEL_19248 = 'component_19248';
export function Component19248({ value = 19248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19248, 'data-value': derived.doubled }, children);
}
export default Component19248;
