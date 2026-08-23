import React from 'react';
const LABEL_19057 = 'component_19057';
export function Component19057({ value = 19057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19057, 'data-value': derived.doubled }, children);
}
export default Component19057;
