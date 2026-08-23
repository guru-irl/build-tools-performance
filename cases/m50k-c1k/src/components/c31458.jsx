import React from 'react';
const LABEL_31458 = 'component_31458';
export function Component31458({ value = 31458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31458, 'data-value': derived.doubled }, children);
}
export default Component31458;
