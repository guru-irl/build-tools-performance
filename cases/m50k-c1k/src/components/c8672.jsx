import React from 'react';
const LABEL_8672 = 'component_8672';
export function Component8672({ value = 8672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8672, 'data-value': derived.doubled }, children);
}
export default Component8672;
