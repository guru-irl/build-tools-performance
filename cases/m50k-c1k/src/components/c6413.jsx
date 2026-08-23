import React from 'react';
const LABEL_6413 = 'component_6413';
export function Component6413({ value = 6413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6413, 'data-value': derived.doubled }, children);
}
export default Component6413;
