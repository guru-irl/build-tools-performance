import React from 'react';
const LABEL_9769 = 'component_9769';
export function Component9769({ value = 9769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9769, 'data-value': derived.doubled }, children);
}
export default Component9769;
