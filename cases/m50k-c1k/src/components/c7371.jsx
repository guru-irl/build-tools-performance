import React from 'react';
const LABEL_7371 = 'component_7371';
export function Component7371({ value = 7371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7371, 'data-value': derived.doubled }, children);
}
export default Component7371;
