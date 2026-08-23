import React from 'react';
const LABEL_8413 = 'component_8413';
export function Component8413({ value = 8413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8413, 'data-value': derived.doubled }, children);
}
export default Component8413;
