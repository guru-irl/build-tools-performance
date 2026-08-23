import React from 'react';
const LABEL_7649 = 'component_7649';
export function Component7649({ value = 7649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7649, 'data-value': derived.doubled }, children);
}
export default Component7649;
