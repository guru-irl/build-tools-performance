import React from 'react';
const LABEL_33052 = 'component_33052';
export function Component33052({ value = 33052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33052, 'data-value': derived.doubled }, children);
}
export default Component33052;
