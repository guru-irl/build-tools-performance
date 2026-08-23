import React from 'react';
const LABEL_20475 = 'component_20475';
export function Component20475({ value = 20475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20475, 'data-value': derived.doubled }, children);
}
export default Component20475;
