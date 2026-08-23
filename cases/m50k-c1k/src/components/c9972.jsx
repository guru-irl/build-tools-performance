import React from 'react';
const LABEL_9972 = 'component_9972';
export function Component9972({ value = 9972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9972, 'data-value': derived.doubled }, children);
}
export default Component9972;
