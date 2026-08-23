import React from 'react';
const LABEL_10204 = 'component_10204';
export function Component10204({ value = 10204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10204, 'data-value': derived.doubled }, children);
}
export default Component10204;
