import React from 'react';
const LABEL_6122 = 'component_6122';
export function Component6122({ value = 6122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6122, 'data-value': derived.doubled }, children);
}
export default Component6122;
