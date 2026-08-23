import React from 'react';
const LABEL_7526 = 'component_7526';
export function Component7526({ value = 7526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7526, 'data-value': derived.doubled }, children);
}
export default Component7526;
