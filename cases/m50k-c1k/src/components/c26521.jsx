import React from 'react';
const LABEL_26521 = 'component_26521';
export function Component26521({ value = 26521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26521, 'data-value': derived.doubled }, children);
}
export default Component26521;
