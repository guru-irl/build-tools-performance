import React from 'react';
const LABEL_30884 = 'component_30884';
export function Component30884({ value = 30884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30884, 'data-value': derived.doubled }, children);
}
export default Component30884;
