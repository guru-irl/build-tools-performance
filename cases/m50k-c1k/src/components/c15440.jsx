import React from 'react';
const LABEL_15440 = 'component_15440';
export function Component15440({ value = 15440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15440, 'data-value': derived.doubled }, children);
}
export default Component15440;
