import React from 'react';
const LABEL_33985 = 'component_33985';
export function Component33985({ value = 33985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33985, 'data-value': derived.doubled }, children);
}
export default Component33985;
