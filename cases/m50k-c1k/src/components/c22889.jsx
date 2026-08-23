import React from 'react';
const LABEL_22889 = 'component_22889';
export function Component22889({ value = 22889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22889, 'data-value': derived.doubled }, children);
}
export default Component22889;
