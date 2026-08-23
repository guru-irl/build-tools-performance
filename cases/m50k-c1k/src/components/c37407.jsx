import React from 'react';
const LABEL_37407 = 'component_37407';
export function Component37407({ value = 37407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37407, 'data-value': derived.doubled }, children);
}
export default Component37407;
