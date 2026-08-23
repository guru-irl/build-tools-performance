import React from 'react';
const LABEL_41243 = 'component_41243';
export function Component41243({ value = 41243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41243, 'data-value': derived.doubled }, children);
}
export default Component41243;
