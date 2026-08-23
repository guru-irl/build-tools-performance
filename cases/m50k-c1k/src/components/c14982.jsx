import React from 'react';
const LABEL_14982 = 'component_14982';
export function Component14982({ value = 14982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14982, 'data-value': derived.doubled }, children);
}
export default Component14982;
