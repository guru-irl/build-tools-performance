import React from 'react';
const LABEL_33413 = 'component_33413';
export function Component33413({ value = 33413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33413, 'data-value': derived.doubled }, children);
}
export default Component33413;
