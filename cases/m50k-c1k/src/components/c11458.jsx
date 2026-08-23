import React from 'react';
const LABEL_11458 = 'component_11458';
export function Component11458({ value = 11458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11458, 'data-value': derived.doubled }, children);
}
export default Component11458;
