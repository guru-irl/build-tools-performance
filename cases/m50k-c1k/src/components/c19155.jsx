import React from 'react';
const LABEL_19155 = 'component_19155';
export function Component19155({ value = 19155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19155, 'data-value': derived.doubled }, children);
}
export default Component19155;
