import React from 'react';
const LABEL_36889 = 'component_36889';
export function Component36889({ value = 36889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36889, 'data-value': derived.doubled }, children);
}
export default Component36889;
