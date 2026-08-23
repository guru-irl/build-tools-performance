import React from 'react';
const LABEL_30762 = 'component_30762';
export function Component30762({ value = 30762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30762, 'data-value': derived.doubled }, children);
}
export default Component30762;
