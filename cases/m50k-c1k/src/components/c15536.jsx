import React from 'react';
const LABEL_15536 = 'component_15536';
export function Component15536({ value = 15536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15536, 'data-value': derived.doubled }, children);
}
export default Component15536;
