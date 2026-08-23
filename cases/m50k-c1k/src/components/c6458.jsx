import React from 'react';
const LABEL_6458 = 'component_6458';
export function Component6458({ value = 6458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6458, 'data-value': derived.doubled }, children);
}
export default Component6458;
