import React from 'react';
const LABEL_37348 = 'component_37348';
export function Component37348({ value = 37348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37348, 'data-value': derived.doubled }, children);
}
export default Component37348;
