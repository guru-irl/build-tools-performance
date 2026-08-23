import React from 'react';
const LABEL_10075 = 'component_10075';
export function Component10075({ value = 10075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10075, 'data-value': derived.doubled }, children);
}
export default Component10075;
