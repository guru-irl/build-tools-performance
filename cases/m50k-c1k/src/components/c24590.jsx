import React from 'react';
const LABEL_24590 = 'component_24590';
export function Component24590({ value = 24590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24590, 'data-value': derived.doubled }, children);
}
export default Component24590;
