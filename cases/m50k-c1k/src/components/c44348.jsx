import React from 'react';
const LABEL_44348 = 'component_44348';
export function Component44348({ value = 44348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44348, 'data-value': derived.doubled }, children);
}
export default Component44348;
