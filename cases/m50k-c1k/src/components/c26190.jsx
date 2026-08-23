import React from 'react';
const LABEL_26190 = 'component_26190';
export function Component26190({ value = 26190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26190, 'data-value': derived.doubled }, children);
}
export default Component26190;
