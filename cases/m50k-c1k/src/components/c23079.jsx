import React from 'react';
const LABEL_23079 = 'component_23079';
export function Component23079({ value = 23079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23079, 'data-value': derived.doubled }, children);
}
export default Component23079;
