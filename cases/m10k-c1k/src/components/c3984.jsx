import React from 'react';
const LABEL_3984 = 'component_3984';
export function Component3984({ value = 3984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3984, 'data-value': derived.doubled }, children);
}
export default Component3984;
