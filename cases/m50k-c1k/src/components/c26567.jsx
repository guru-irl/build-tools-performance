import React from 'react';
const LABEL_26567 = 'component_26567';
export function Component26567({ value = 26567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26567, 'data-value': derived.doubled }, children);
}
export default Component26567;
