import React from 'react';
const LABEL_5672 = 'component_5672';
export function Component5672({ value = 5672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5672, 'data-value': derived.doubled }, children);
}
export default Component5672;
