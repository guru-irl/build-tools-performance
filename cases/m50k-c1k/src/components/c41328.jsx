import React from 'react';
const LABEL_41328 = 'component_41328';
export function Component41328({ value = 41328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41328, 'data-value': derived.doubled }, children);
}
export default Component41328;
