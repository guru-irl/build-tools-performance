import React from 'react';
const LABEL_9458 = 'component_9458';
export function Component9458({ value = 9458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9458, 'data-value': derived.doubled }, children);
}
export default Component9458;
