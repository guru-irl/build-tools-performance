import React from 'react';
const LABEL_41629 = 'component_41629';
export function Component41629({ value = 41629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41629, 'data-value': derived.doubled }, children);
}
export default Component41629;
