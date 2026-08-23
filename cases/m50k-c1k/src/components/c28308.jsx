import React from 'react';
const LABEL_28308 = 'component_28308';
export function Component28308({ value = 28308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28308, 'data-value': derived.doubled }, children);
}
export default Component28308;
