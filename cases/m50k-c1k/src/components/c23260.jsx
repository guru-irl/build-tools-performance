import React from 'react';
const LABEL_23260 = 'component_23260';
export function Component23260({ value = 23260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23260, 'data-value': derived.doubled }, children);
}
export default Component23260;
