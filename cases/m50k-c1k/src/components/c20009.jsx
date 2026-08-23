import React from 'react';
const LABEL_20009 = 'component_20009';
export function Component20009({ value = 20009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20009, 'data-value': derived.doubled }, children);
}
export default Component20009;
