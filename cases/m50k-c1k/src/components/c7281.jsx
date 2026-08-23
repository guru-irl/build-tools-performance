import React from 'react';
const LABEL_7281 = 'component_7281';
export function Component7281({ value = 7281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7281, 'data-value': derived.doubled }, children);
}
export default Component7281;
