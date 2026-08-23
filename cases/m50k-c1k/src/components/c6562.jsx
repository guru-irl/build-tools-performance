import React from 'react';
const LABEL_6562 = 'component_6562';
export function Component6562({ value = 6562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6562, 'data-value': derived.doubled }, children);
}
export default Component6562;
