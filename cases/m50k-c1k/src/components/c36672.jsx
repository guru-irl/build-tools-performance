import React from 'react';
const LABEL_36672 = 'component_36672';
export function Component36672({ value = 36672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36672, 'data-value': derived.doubled }, children);
}
export default Component36672;
