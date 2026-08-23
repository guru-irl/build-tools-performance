import React from 'react';
const LABEL_30449 = 'component_30449';
export function Component30449({ value = 30449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30449, 'data-value': derived.doubled }, children);
}
export default Component30449;
