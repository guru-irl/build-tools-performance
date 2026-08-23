import React from 'react';
const LABEL_15568 = 'component_15568';
export function Component15568({ value = 15568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15568, 'data-value': derived.doubled }, children);
}
export default Component15568;
