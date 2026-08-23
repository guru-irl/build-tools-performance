import React from 'react';
const LABEL_16287 = 'component_16287';
export function Component16287({ value = 16287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16287, 'data-value': derived.doubled }, children);
}
export default Component16287;
