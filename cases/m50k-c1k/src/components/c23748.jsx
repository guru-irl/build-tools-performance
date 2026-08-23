import React from 'react';
const LABEL_23748 = 'component_23748';
export function Component23748({ value = 23748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23748, 'data-value': derived.doubled }, children);
}
export default Component23748;
