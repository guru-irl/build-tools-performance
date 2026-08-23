import React from 'react';
const LABEL_41426 = 'component_41426';
export function Component41426({ value = 41426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41426, 'data-value': derived.doubled }, children);
}
export default Component41426;
