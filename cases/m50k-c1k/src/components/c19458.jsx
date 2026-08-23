import React from 'react';
const LABEL_19458 = 'component_19458';
export function Component19458({ value = 19458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19458, 'data-value': derived.doubled }, children);
}
export default Component19458;
