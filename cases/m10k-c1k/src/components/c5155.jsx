import React from 'react';
const LABEL_5155 = 'component_5155';
export function Component5155({ value = 5155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5155, 'data-value': derived.doubled }, children);
}
export default Component5155;
