import React from 'react';
const LABEL_22458 = 'component_22458';
export function Component22458({ value = 22458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22458, 'data-value': derived.doubled }, children);
}
export default Component22458;
