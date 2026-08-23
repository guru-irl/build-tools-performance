import React from 'react';
const LABEL_29413 = 'component_29413';
export function Component29413({ value = 29413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29413, 'data-value': derived.doubled }, children);
}
export default Component29413;
