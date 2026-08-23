import React from 'react';
const LABEL_30672 = 'component_30672';
export function Component30672({ value = 30672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30672, 'data-value': derived.doubled }, children);
}
export default Component30672;
