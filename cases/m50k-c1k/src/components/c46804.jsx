import React from 'react';
const LABEL_46804 = 'component_46804';
export function Component46804({ value = 46804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46804, 'data-value': derived.doubled }, children);
}
export default Component46804;
