import React from 'react';
const LABEL_35100 = 'component_35100';
export function Component35100({ value = 35100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35100, 'data-value': derived.doubled }, children);
}
export default Component35100;
