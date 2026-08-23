import React from 'react';
const LABEL_23155 = 'component_23155';
export function Component23155({ value = 23155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23155, 'data-value': derived.doubled }, children);
}
export default Component23155;
