import React from 'react';
const LABEL_9763 = 'component_9763';
export function Component9763({ value = 9763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9763, 'data-value': derived.doubled }, children);
}
export default Component9763;
