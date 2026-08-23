import React from 'react';
const LABEL_26458 = 'component_26458';
export function Component26458({ value = 26458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26458, 'data-value': derived.doubled }, children);
}
export default Component26458;
