import React from 'react';
const LABEL_31655 = 'component_31655';
export function Component31655({ value = 31655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31655, 'data-value': derived.doubled }, children);
}
export default Component31655;
