import React from 'react';
const LABEL_20464 = 'component_20464';
export function Component20464({ value = 20464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20464, 'data-value': derived.doubled }, children);
}
export default Component20464;
