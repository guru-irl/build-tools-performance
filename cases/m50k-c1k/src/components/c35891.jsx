import React from 'react';
const LABEL_35891 = 'component_35891';
export function Component35891({ value = 35891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35891, 'data-value': derived.doubled }, children);
}
export default Component35891;
