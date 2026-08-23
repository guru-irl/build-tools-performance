import React from 'react';
const LABEL_10400 = 'component_10400';
export function Component10400({ value = 10400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10400, 'data-value': derived.doubled }, children);
}
export default Component10400;
