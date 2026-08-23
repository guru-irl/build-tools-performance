import React from 'react';
const LABEL_20526 = 'component_20526';
export function Component20526({ value = 20526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20526, 'data-value': derived.doubled }, children);
}
export default Component20526;
