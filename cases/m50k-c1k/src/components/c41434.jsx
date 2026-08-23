import React from 'react';
const LABEL_41434 = 'component_41434';
export function Component41434({ value = 41434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41434, 'data-value': derived.doubled }, children);
}
export default Component41434;
