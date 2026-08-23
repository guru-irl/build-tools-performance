import React from 'react';
const LABEL_15937 = 'component_15937';
export function Component15937({ value = 15937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15937, 'data-value': derived.doubled }, children);
}
export default Component15937;
