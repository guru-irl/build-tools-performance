import React from 'react';
const LABEL_23889 = 'component_23889';
export function Component23889({ value = 23889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23889, 'data-value': derived.doubled }, children);
}
export default Component23889;
