import React from 'react';
const LABEL_5400 = 'component_5400';
export function Component5400({ value = 5400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5400, 'data-value': derived.doubled }, children);
}
export default Component5400;
