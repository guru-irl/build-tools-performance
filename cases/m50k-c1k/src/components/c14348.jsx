import React from 'react';
const LABEL_14348 = 'component_14348';
export function Component14348({ value = 14348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14348, 'data-value': derived.doubled }, children);
}
export default Component14348;
