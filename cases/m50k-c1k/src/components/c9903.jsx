import React from 'react';
const LABEL_9903 = 'component_9903';
export function Component9903({ value = 9903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9903, 'data-value': derived.doubled }, children);
}
export default Component9903;
