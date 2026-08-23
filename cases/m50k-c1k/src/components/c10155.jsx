import React from 'react';
const LABEL_10155 = 'component_10155';
export function Component10155({ value = 10155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10155, 'data-value': derived.doubled }, children);
}
export default Component10155;
