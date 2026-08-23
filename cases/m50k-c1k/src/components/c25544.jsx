import React from 'react';
const LABEL_25544 = 'component_25544';
export function Component25544({ value = 25544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25544, 'data-value': derived.doubled }, children);
}
export default Component25544;
