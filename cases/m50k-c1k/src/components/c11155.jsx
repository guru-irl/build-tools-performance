import React from 'react';
const LABEL_11155 = 'component_11155';
export function Component11155({ value = 11155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11155, 'data-value': derived.doubled }, children);
}
export default Component11155;
