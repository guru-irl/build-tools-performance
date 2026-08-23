import React from 'react';
const LABEL_40125 = 'component_40125';
export function Component40125({ value = 40125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40125, 'data-value': derived.doubled }, children);
}
export default Component40125;
