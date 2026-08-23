import React from 'react';
const LABEL_15144 = 'component_15144';
export function Component15144({ value = 15144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15144, 'data-value': derived.doubled }, children);
}
export default Component15144;
