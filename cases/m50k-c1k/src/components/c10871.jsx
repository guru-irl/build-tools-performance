import React from 'react';
const LABEL_10871 = 'component_10871';
export function Component10871({ value = 10871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10871, 'data-value': derived.doubled }, children);
}
export default Component10871;
