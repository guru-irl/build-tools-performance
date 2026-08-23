import React from 'react';
const LABEL_42655 = 'component_42655';
export function Component42655({ value = 42655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42655, 'data-value': derived.doubled }, children);
}
export default Component42655;
