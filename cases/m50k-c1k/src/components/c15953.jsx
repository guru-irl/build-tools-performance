import React from 'react';
const LABEL_15953 = 'component_15953';
export function Component15953({ value = 15953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15953, 'data-value': derived.doubled }, children);
}
export default Component15953;
