import React from 'react';
const LABEL_10348 = 'component_10348';
export function Component10348({ value = 10348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10348, 'data-value': derived.doubled }, children);
}
export default Component10348;
