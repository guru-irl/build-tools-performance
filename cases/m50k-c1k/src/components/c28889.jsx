import React from 'react';
const LABEL_28889 = 'component_28889';
export function Component28889({ value = 28889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28889, 'data-value': derived.doubled }, children);
}
export default Component28889;
