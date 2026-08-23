import React from 'react';
const LABEL_16889 = 'component_16889';
export function Component16889({ value = 16889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16889, 'data-value': derived.doubled }, children);
}
export default Component16889;
