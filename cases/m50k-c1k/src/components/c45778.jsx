import React from 'react';
const LABEL_45778 = 'component_45778';
export function Component45778({ value = 45778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45778, 'data-value': derived.doubled }, children);
}
export default Component45778;
