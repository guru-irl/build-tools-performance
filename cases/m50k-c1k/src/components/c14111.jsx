import React from 'react';
const LABEL_14111 = 'component_14111';
export function Component14111({ value = 14111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14111, 'data-value': derived.doubled }, children);
}
export default Component14111;
