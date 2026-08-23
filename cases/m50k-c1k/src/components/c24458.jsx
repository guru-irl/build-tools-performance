import React from 'react';
const LABEL_24458 = 'component_24458';
export function Component24458({ value = 24458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24458, 'data-value': derived.doubled }, children);
}
export default Component24458;
