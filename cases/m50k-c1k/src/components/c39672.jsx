import React from 'react';
const LABEL_39672 = 'component_39672';
export function Component39672({ value = 39672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39672, 'data-value': derived.doubled }, children);
}
export default Component39672;
