import React from 'react';
const LABEL_3169 = 'component_3169';
export function Component3169({ value = 3169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3169, 'data-value': derived.doubled }, children);
}
export default Component3169;
