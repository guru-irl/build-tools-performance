import React from 'react';
const LABEL_4672 = 'component_4672';
export function Component4672({ value = 4672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4672, 'data-value': derived.doubled }, children);
}
export default Component4672;
