import React from 'react';
const LABEL_3458 = 'component_3458';
export function Component3458({ value = 3458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3458, 'data-value': derived.doubled }, children);
}
export default Component3458;
