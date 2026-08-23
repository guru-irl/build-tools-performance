import React from 'react';
const LABEL_193 = 'component_193';
export function Component193({ value = 193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_193, 'data-value': derived.doubled }, children);
}
export default Component193;
