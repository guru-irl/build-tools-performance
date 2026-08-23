import React from 'react';
const LABEL_7792 = 'component_7792';
export function Component7792({ value = 7792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7792, 'data-value': derived.doubled }, children);
}
export default Component7792;
