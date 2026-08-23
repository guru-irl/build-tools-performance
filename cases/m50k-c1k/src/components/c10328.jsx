import React from 'react';
const LABEL_10328 = 'component_10328';
export function Component10328({ value = 10328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10328, 'data-value': derived.doubled }, children);
}
export default Component10328;
