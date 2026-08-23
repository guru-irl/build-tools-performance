import React from 'react';
const LABEL_14463 = 'component_14463';
export function Component14463({ value = 14463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14463, 'data-value': derived.doubled }, children);
}
export default Component14463;
