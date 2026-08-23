import React from 'react';
const LABEL_18889 = 'component_18889';
export function Component18889({ value = 18889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18889, 'data-value': derived.doubled }, children);
}
export default Component18889;
