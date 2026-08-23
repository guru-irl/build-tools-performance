import React from 'react';
const LABEL_24411 = 'component_24411';
export function Component24411({ value = 24411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24411, 'data-value': derived.doubled }, children);
}
export default Component24411;
