import React from 'react';
const LABEL_35696 = 'component_35696';
export function Component35696({ value = 35696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35696, 'data-value': derived.doubled }, children);
}
export default Component35696;
