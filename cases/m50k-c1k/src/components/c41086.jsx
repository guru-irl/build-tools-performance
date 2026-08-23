import React from 'react';
const LABEL_41086 = 'component_41086';
export function Component41086({ value = 41086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41086, 'data-value': derived.doubled }, children);
}
export default Component41086;
