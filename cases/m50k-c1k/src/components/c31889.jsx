import React from 'react';
const LABEL_31889 = 'component_31889';
export function Component31889({ value = 31889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31889, 'data-value': derived.doubled }, children);
}
export default Component31889;
