import React from 'react';
const LABEL_7222 = 'component_7222';
export function Component7222({ value = 7222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7222, 'data-value': derived.doubled }, children);
}
export default Component7222;
