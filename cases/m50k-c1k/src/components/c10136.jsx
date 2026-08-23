import React from 'react';
const LABEL_10136 = 'component_10136';
export function Component10136({ value = 10136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10136, 'data-value': derived.doubled }, children);
}
export default Component10136;
