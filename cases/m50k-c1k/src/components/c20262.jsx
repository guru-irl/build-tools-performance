import React from 'react';
const LABEL_20262 = 'component_20262';
export function Component20262({ value = 20262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20262, 'data-value': derived.doubled }, children);
}
export default Component20262;
