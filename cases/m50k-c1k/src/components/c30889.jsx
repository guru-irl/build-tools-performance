import React from 'react';
const LABEL_30889 = 'component_30889';
export function Component30889({ value = 30889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30889, 'data-value': derived.doubled }, children);
}
export default Component30889;
