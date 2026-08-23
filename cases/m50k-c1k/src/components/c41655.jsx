import React from 'react';
const LABEL_41655 = 'component_41655';
export function Component41655({ value = 41655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41655, 'data-value': derived.doubled }, children);
}
export default Component41655;
