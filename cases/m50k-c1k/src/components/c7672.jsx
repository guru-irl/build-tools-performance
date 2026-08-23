import React from 'react';
const LABEL_7672 = 'component_7672';
export function Component7672({ value = 7672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7672, 'data-value': derived.doubled }, children);
}
export default Component7672;
