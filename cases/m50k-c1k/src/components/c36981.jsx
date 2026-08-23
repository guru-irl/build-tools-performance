import React from 'react';
const LABEL_36981 = 'component_36981';
export function Component36981({ value = 36981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36981, 'data-value': derived.doubled }, children);
}
export default Component36981;
