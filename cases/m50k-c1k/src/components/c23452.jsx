import React from 'react';
const LABEL_23452 = 'component_23452';
export function Component23452({ value = 23452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23452, 'data-value': derived.doubled }, children);
}
export default Component23452;
