import React from 'react';
const LABEL_41803 = 'component_41803';
export function Component41803({ value = 41803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41803, 'data-value': derived.doubled }, children);
}
export default Component41803;
