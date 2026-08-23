import React from 'react';
const LABEL_39773 = 'component_39773';
export function Component39773({ value = 39773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39773, 'data-value': derived.doubled }, children);
}
export default Component39773;
