import React from 'react';
const LABEL_10889 = 'component_10889';
export function Component10889({ value = 10889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10889, 'data-value': derived.doubled }, children);
}
export default Component10889;
