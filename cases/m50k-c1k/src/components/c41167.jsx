import React from 'react';
const LABEL_41167 = 'component_41167';
export function Component41167({ value = 41167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41167, 'data-value': derived.doubled }, children);
}
export default Component41167;
