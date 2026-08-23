import React from 'react';
const LABEL_7458 = 'component_7458';
export function Component7458({ value = 7458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7458, 'data-value': derived.doubled }, children);
}
export default Component7458;
