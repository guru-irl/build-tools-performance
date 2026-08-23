import React from 'react';
const LABEL_651 = 'component_651';
export function Component651({ value = 651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_651, 'data-value': derived.doubled }, children);
}
export default Component651;
