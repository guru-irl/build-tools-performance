import React from 'react';
const LABEL_6155 = 'component_6155';
export function Component6155({ value = 6155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6155, 'data-value': derived.doubled }, children);
}
export default Component6155;
