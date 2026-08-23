import React from 'react';
const LABEL_9429 = 'component_9429';
export function Component9429({ value = 9429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9429, 'data-value': derived.doubled }, children);
}
export default Component9429;
