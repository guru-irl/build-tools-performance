import React from 'react';
const LABEL_41840 = 'component_41840';
export function Component41840({ value = 41840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41840, 'data-value': derived.doubled }, children);
}
export default Component41840;
