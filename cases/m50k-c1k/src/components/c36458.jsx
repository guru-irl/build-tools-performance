import React from 'react';
const LABEL_36458 = 'component_36458';
export function Component36458({ value = 36458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36458, 'data-value': derived.doubled }, children);
}
export default Component36458;
