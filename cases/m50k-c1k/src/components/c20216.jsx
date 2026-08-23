import React from 'react';
const LABEL_20216 = 'component_20216';
export function Component20216({ value = 20216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20216, 'data-value': derived.doubled }, children);
}
export default Component20216;
