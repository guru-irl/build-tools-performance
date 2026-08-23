import React from 'react';
const LABEL_4753 = 'component_4753';
export function Component4753({ value = 4753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4753, 'data-value': derived.doubled }, children);
}
export default Component4753;
