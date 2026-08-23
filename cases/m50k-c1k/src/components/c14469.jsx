import React from 'react';
const LABEL_14469 = 'component_14469';
export function Component14469({ value = 14469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14469, 'data-value': derived.doubled }, children);
}
export default Component14469;
