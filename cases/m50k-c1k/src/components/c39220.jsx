import React from 'react';
const LABEL_39220 = 'component_39220';
export function Component39220({ value = 39220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39220, 'data-value': derived.doubled }, children);
}
export default Component39220;
