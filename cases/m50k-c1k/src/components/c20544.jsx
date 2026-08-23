import React from 'react';
const LABEL_20544 = 'component_20544';
export function Component20544({ value = 20544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20544, 'data-value': derived.doubled }, children);
}
export default Component20544;
