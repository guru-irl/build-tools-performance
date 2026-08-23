import React from 'react';
const LABEL_42792 = 'component_42792';
export function Component42792({ value = 42792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42792, 'data-value': derived.doubled }, children);
}
export default Component42792;
