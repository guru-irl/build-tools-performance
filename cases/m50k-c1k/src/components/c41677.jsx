import React from 'react';
const LABEL_41677 = 'component_41677';
export function Component41677({ value = 41677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41677, 'data-value': derived.doubled }, children);
}
export default Component41677;
