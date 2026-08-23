import React from 'react';
const LABEL_5079 = 'component_5079';
export function Component5079({ value = 5079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5079, 'data-value': derived.doubled }, children);
}
export default Component5079;
