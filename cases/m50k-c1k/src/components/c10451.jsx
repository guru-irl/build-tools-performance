import React from 'react';
const LABEL_10451 = 'component_10451';
export function Component10451({ value = 10451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10451, 'data-value': derived.doubled }, children);
}
export default Component10451;
