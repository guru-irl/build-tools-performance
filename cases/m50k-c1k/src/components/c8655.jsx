import React from 'react';
const LABEL_8655 = 'component_8655';
export function Component8655({ value = 8655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8655, 'data-value': derived.doubled }, children);
}
export default Component8655;
