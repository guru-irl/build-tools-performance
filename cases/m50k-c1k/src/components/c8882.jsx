import React from 'react';
const LABEL_8882 = 'component_8882';
export function Component8882({ value = 8882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8882, 'data-value': derived.doubled }, children);
}
export default Component8882;
