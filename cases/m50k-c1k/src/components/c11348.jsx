import React from 'react';
const LABEL_11348 = 'component_11348';
export function Component11348({ value = 11348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11348, 'data-value': derived.doubled }, children);
}
export default Component11348;
