import React from 'react';
const LABEL_18458 = 'component_18458';
export function Component18458({ value = 18458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18458, 'data-value': derived.doubled }, children);
}
export default Component18458;
