import React from 'react';
const LABEL_9082 = 'component_9082';
export function Component9082({ value = 9082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9082, 'data-value': derived.doubled }, children);
}
export default Component9082;
