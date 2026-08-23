import React from 'react';
const LABEL_41036 = 'component_41036';
export function Component41036({ value = 41036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41036, 'data-value': derived.doubled }, children);
}
export default Component41036;
