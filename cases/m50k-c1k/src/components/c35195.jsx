import React from 'react';
const LABEL_35195 = 'component_35195';
export function Component35195({ value = 35195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35195, 'data-value': derived.doubled }, children);
}
export default Component35195;
