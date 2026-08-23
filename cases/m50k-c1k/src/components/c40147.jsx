import React from 'react';
const LABEL_40147 = 'component_40147';
export function Component40147({ value = 40147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40147, 'data-value': derived.doubled }, children);
}
export default Component40147;
