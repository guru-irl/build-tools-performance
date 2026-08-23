import React from 'react';
const LABEL_41296 = 'component_41296';
export function Component41296({ value = 41296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41296, 'data-value': derived.doubled }, children);
}
export default Component41296;
