import React from 'react';
const LABEL_13458 = 'component_13458';
export function Component13458({ value = 13458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13458, 'data-value': derived.doubled }, children);
}
export default Component13458;
