import React from 'react';
const LABEL_22155 = 'component_22155';
export function Component22155({ value = 22155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22155, 'data-value': derived.doubled }, children);
}
export default Component22155;
