import React from 'react';
const LABEL_25248 = 'component_25248';
export function Component25248({ value = 25248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25248, 'data-value': derived.doubled }, children);
}
export default Component25248;
