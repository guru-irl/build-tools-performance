import React from 'react';
const LABEL_7627 = 'component_7627';
export function Component7627({ value = 7627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7627, 'data-value': derived.doubled }, children);
}
export default Component7627;
