import React from 'react';
const LABEL_9177 = 'component_9177';
export function Component9177({ value = 9177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9177, 'data-value': derived.doubled }, children);
}
export default Component9177;
