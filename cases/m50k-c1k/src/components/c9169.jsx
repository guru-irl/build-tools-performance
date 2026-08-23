import React from 'react';
const LABEL_9169 = 'component_9169';
export function Component9169({ value = 9169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9169, 'data-value': derived.doubled }, children);
}
export default Component9169;
