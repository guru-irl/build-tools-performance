import React from 'react';
const LABEL_5889 = 'component_5889';
export function Component5889({ value = 5889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5889, 'data-value': derived.doubled }, children);
}
export default Component5889;
