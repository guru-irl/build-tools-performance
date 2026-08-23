import React from 'react';
const LABEL_32889 = 'component_32889';
export function Component32889({ value = 32889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32889, 'data-value': derived.doubled }, children);
}
export default Component32889;
