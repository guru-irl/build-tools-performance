import React from 'react';
const LABEL_35889 = 'component_35889';
export function Component35889({ value = 35889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35889, 'data-value': derived.doubled }, children);
}
export default Component35889;
