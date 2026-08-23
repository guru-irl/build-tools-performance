import React from 'react';
const LABEL_7883 = 'component_7883';
export function Component7883({ value = 7883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7883, 'data-value': derived.doubled }, children);
}
export default Component7883;
