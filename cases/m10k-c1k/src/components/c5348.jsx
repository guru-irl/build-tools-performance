import React from 'react';
const LABEL_5348 = 'component_5348';
export function Component5348({ value = 5348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5348, 'data-value': derived.doubled }, children);
}
export default Component5348;
