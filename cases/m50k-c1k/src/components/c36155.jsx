import React from 'react';
const LABEL_36155 = 'component_36155';
export function Component36155({ value = 36155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36155, 'data-value': derived.doubled }, children);
}
export default Component36155;
