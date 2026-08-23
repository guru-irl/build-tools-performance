import React from 'react';
const LABEL_15651 = 'component_15651';
export function Component15651({ value = 15651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15651, 'data-value': derived.doubled }, children);
}
export default Component15651;
