import React from 'react';
const LABEL_24672 = 'component_24672';
export function Component24672({ value = 24672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24672, 'data-value': derived.doubled }, children);
}
export default Component24672;
