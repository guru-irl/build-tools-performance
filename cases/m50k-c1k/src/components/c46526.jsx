import React from 'react';
const LABEL_46526 = 'component_46526';
export function Component46526({ value = 46526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46526, 'data-value': derived.doubled }, children);
}
export default Component46526;
