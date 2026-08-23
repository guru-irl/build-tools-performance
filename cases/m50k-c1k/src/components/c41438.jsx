import React from 'react';
const LABEL_41438 = 'component_41438';
export function Component41438({ value = 41438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41438, 'data-value': derived.doubled }, children);
}
export default Component41438;
