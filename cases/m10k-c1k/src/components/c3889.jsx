import React from 'react';
const LABEL_3889 = 'component_3889';
export function Component3889({ value = 3889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3889, 'data-value': derived.doubled }, children);
}
export default Component3889;
