import React from 'react';
const LABEL_13276 = 'component_13276';
export function Component13276({ value = 13276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13276, 'data-value': derived.doubled }, children);
}
export default Component13276;
