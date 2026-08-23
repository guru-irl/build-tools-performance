import React from 'react';
const LABEL_41094 = 'component_41094';
export function Component41094({ value = 41094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41094, 'data-value': derived.doubled }, children);
}
export default Component41094;
