import React from 'react';
const LABEL_11854 = 'component_11854';
export function Component11854({ value = 11854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11854, 'data-value': derived.doubled }, children);
}
export default Component11854;
