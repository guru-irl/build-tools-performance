import React from 'react';
const LABEL_9773 = 'component_9773';
export function Component9773({ value = 9773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9773, 'data-value': derived.doubled }, children);
}
export default Component9773;
