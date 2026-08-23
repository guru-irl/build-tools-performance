import React from 'react';
const LABEL_39472 = 'component_39472';
export function Component39472({ value = 39472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39472, 'data-value': derived.doubled }, children);
}
export default Component39472;
