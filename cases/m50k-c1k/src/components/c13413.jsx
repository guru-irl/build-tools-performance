import React from 'react';
const LABEL_13413 = 'component_13413';
export function Component13413({ value = 13413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13413, 'data-value': derived.doubled }, children);
}
export default Component13413;
