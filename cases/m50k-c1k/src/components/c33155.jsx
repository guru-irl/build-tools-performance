import React from 'react';
const LABEL_33155 = 'component_33155';
export function Component33155({ value = 33155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33155, 'data-value': derived.doubled }, children);
}
export default Component33155;
