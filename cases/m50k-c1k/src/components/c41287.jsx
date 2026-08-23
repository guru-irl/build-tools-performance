import React from 'react';
const LABEL_41287 = 'component_41287';
export function Component41287({ value = 41287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41287, 'data-value': derived.doubled }, children);
}
export default Component41287;
