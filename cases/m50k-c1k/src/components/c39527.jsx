import React from 'react';
const LABEL_39527 = 'component_39527';
export function Component39527({ value = 39527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39527, 'data-value': derived.doubled }, children);
}
export default Component39527;
